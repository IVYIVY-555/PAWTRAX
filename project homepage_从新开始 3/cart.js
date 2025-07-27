// cart.js - 购物车功能模块

// 购物车数据结构
let cart = {
    items: [],
    total: 0,
    count: 0
};

// 初始化购物车
function initCart() {
    loadCart();
    updateCartUI();
    setupEventListeners();
}

// 从localStorage加载购物车
function loadCart() {
    const savedCart = localStorage.getItem('pawtrax_cart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        cart.items = parsedCart.items || [];
        cart.total = parsedCart.total || 0;
        cart.count = parsedCart.count || 0;
    }
}

// 保存购物车到localStorage
function saveCart() {
    localStorage.setItem('pawtrax_cart', JSON.stringify(cart));
}

// 添加到购物车
function addToCart(productId, productName, productPrice) {
    const price = parseFloat(productPrice);
    if (isNaN(price)) return;
    
    const existingItem = cart.items.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    cart.total += price;
    cart.count += 1;
    saveCart();
    updateCartUI();
    showToast(`${productName} added to cart`);
}

// 更新购物车UI
function updateCartUI() {
    // 更新购物车角标
    const cartBadges = document.querySelectorAll('.cart-badge');
    cartBadges.forEach(badge => {
        badge.textContent = cart.count;
    });
    
    // 更新购物车模态框
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.items.length === 0) {
            cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
        } else {
            cart.items.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'flex py-4 border-b border-gray-200';
                cartItem.innerHTML = `
                    <div class="ml-4 flex-1">
                        <div class="flex justify-between">
                            <h3 class="text-gray-900">${item.name}</h3>
                            <p class="ml-4 text-gray-900">£${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div class="flex items-center mt-2">
                            <button class="quantity-btn px-2" data-action="decrease" data-id="${item.id}">-</button>
                            <span class="mx-2">${item.quantity}</span>
                            <button class="quantity-btn px-2" data-action="increase" data-id="${item.id}">+</button>
                            <button class="remove-btn text-red-500 ml-4" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
        }
    }
    
    if (cartTotal) {
        cartTotal.textContent = `£${cart.total.toFixed(2)}`;
    }
}

// 更新商品数量
function updateQuantity(productId, change) {
    const item = cart.items.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeItem(productId);
        return;
    }
    
    cart.total += change * item.price;
    cart.count += change;
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
}

// 移除商品
function removeItem(productId) {
    const index = cart.items.findIndex(item => item.id === productId);
    if (index === -1) return;
    
    const item = cart.items[index];
    cart.total -= item.price * item.quantity;
    cart.count -= item.quantity;
    cart.items.splice(index, 1);
    saveCart();
    updateCartUI();
}

// 显示Toast通知
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast bg-amber-200 text-amber-800 px-4 py-2 rounded-lg shadow-lg border border-amber-300 flex items-center';
    toast.innerHTML = `
        <i class="fas fa-check-circle mr-2"></i>
        ${message}
    `;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 切换购物车显示/隐藏
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
    document.body.style.overflow = cartModal.classList.contains('hidden') ? 'auto' : 'hidden';
}

// 设置事件监听器
function setupEventListeners() {
    // 购物车图标点击
    document.getElementById('cart-icon')?.addEventListener('click', toggleCart);
    
    // 关闭购物车按钮
    document.getElementById('close-cart')?.addEventListener('click', toggleCart);
    
    // 遮罩层点击关闭
    document.getElementById('cart-backdrop')?.addEventListener('click', toggleCart);
    
    // 添加购物车按钮事件委托
    document.body.addEventListener('click', function(e) {
        // 添加购物车按钮
        if (e.target.closest('.add-to-cart')) {
            const button = e.target.closest('.add-to-cart');
            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = button.dataset.productPrice;
            
            addToCart(productId, productName, productPrice);
            
            // 按钮反馈效果
            button.innerHTML = '<i class="fas fa-check-circle mr-3"></i> Added ✓';
            button.classList.remove('bg-orange-500', 'hover:bg-orange-600');
            button.classList.add('bg-green-500', 'text-white');
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-cart mr-3"></i> Add to Cart';
                button.classList.remove('bg-green-500', 'text-white');
                button.classList.add('bg-orange-500', 'hover:bg-orange-600');
            }, 1500);
        }
        
        // 处理购物车内数量调整按钮
        if (e.target.closest('.quantity-btn')) {
            const button = e.target.closest('.quantity-btn');
            const action = button.dataset.action;
            const productId = button.dataset.id;
            updateQuantity(productId, action === 'increase' ? 1 : -1);
        }
        
        // 处理移除商品按钮
        if (e.target.closest('.remove-btn')) {
            const button = e.target.closest('.remove-btn');
            removeItem(button.dataset.id);
        }
    });
    
    // 结账按钮
    document.getElementById('checkout-btn')?.addEventListener('click', function() {
        if (cart.items.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        alert('Proceeding to checkout! Total: £' + cart.total.toFixed(2));
    });
}

// 页面加载时初始化购物车
document.addEventListener('DOMContentLoaded', initCart);
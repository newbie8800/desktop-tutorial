;(function ($, window, document, undefined) {
    "use strict";
    // Default options
    var proQuan = new String();
    var proTotal = new String();
    var proPrice = new String();
    var proName = new String();
    var conArr = new Array();
    var proPart = 0;
    var somStr = new String();
    var payTotal = new String();
    var capStr = new String();
    var somStr2 = new String();
    var theStr = new String();

    var defaults = {
        cart: [], // initial products on cart
        resultName: 'cart_list', // Submit name of the cart parameter
        theme: 'default', // theme for the cart, related css need to include for other than default theme
        combineProducts: true, // combine similar products on cart
        highlightEffect: true, // highlight effect on adding/updating product in cart
        //this
         cartItemTemplate: '<img class="img-responsive pull-left" src="{product_image}" /><h4 class="list-group-item-heading">{product_name}</h4><p class="list-group-item-text">{product_desc}</p>',
        cartItemQtyTemplate: '{display_price} × {display_quantity} = {display_amount}',
        productContainerSelector: '.sc-product-item',
        productElementSelector: '*', // input, textarea, select, div, p
        addCartSelector: '.sc-add-to-cart',
        paramSettings: { // Map the paramters
            productPrice: 'product_price',
            productQuantity: 'product_quantity',
            productName: 'product_name',
            productId: 'product_id'
        },
        lang: { // Language variables
            cartTitle: "Shopping Cart",
            //this
           // checkout: 'Checkout',
            clear: 'Clear',
           // debug: 'Debug',//new created by me
            subtotal: 'Subtotal:',
            cartRemove: '×',
            cartEmpty: 'Cart is Empty!<br />Choose your products'
        },


        currencySettings: {
           
          
        },
        
        toolbarSettings: {
            showToolbar: true,
            //this
          //  showCheckoutButton: true,
            showClearButton: true,
           // showDebugButton: true,
            showCartSummary: true,
         //   checkoutButtonStyle: 'default', // default, paypal, image
        //    checkoutButtonImage: '', // image for the checkout button
            toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
       // debug: false
    };

    // The plugin constructor
    function SmartCart(element, options) {
        // Merge user settings with default, recursively
        this.options = $.extend(true, {}, defaults, options);
        // Cart array
        this.cart = [];
        // Cart element
        this.cart_element = $(element);
        // Call initial method
        this.init();
    }

    $.extend(SmartCart.prototype, {

        init: function () {
            // Set the elements
            this._setElements();

            // Add toolbar
            this._setToolbar();

            // Assign plugin events
            this._setEvents();

            // Set initial products
            var mi = this;
            $(this.options.cart).each(function (i, p) {
                p = mi._addToCart(p);
            });

            // Call UI sync
            this._hasCartChange();
        },

        // PRIVATE FUNCTIONS
        /* 
         * Set basic elements for the cart
         */
        _setElements: function () {
            // The element store all cart data and submit with form
            var cartListElement = $('<input type="hidden" name="' + this.options.resultName + '" id="' + this.options.resultName + '" />');
            this.cart_element.append(cartListElement);
            // Set the cart main element
            this.cart_element.addClass('panel panel-default sc-cart sc-theme-' + this.options.theme);
            this.cart_element.append('<div class="panel-heading sc-cart-heading">' + this.options.lang.cartTitle + ' <span class="sc-cart-count badge">0</span></div>');
            this.cart_element.append('<div class="list-group sc-cart-item-list"></div>');
        },
        /* 
         * Set the toolbar for the cart 
         */
        _setToolbar: function () {
            if (this.options.toolbarSettings.showToolbar !== true) {
                return false;
            }

            var toolbar = $('<div></div>').addClass('panel-footer sc-toolbar');
            var toolbarButtonPanel = $('<div class="sc-cart-toolbar">');
            var toolbarSummaryPanel = $('<div class="sc-cart-summary">');







            // Clear Button
            if (this.options.toolbarSettings.showClearButton) {
                var btnClear = $('<button class="btn btn-danger sc-cart-clear" type="button">').text(this.options.lang.clear);
                toolbarButtonPanel.append(btnClear);

                //addon

             
            }
//this
            // //new created by me
            // if (this.options.toolbarSettings.showDebugButton) {
            //     var btnDebug = $('<button class="btn btn-danger sc-cart-debug" type="button">').text(this.options.lang.debug);
            //     toolbarButtonPanel.append(btnDebug);
            
            // }

        

            // Cart Summary
            if (this.options.toolbarSettings.showCartSummary) {
                var panelSubTotal = $('<div class="sc-cart-summary-subtotal">');
                panelSubTotal.append(this.options.lang.subtotal).append(' <span class="sc-cart-subtotal">0</span>');
                toolbarSummaryPanel.append(panelSubTotal);
               // console.log("the sub totoal " + (this.options.lang.subtotal))
            }

            toolbar.append(toolbarSummaryPanel);
            toolbar.append(toolbarButtonPanel);
            this.cart_element.append(toolbar);
        },
        /* 
         * Set events for the cart
         */
        _setEvents: function () {
            var mi = this;
            // Capture add to cart button events
            $(this.options.addCartSelector).on("click", function (e) {
                e.preventDefault();
                var p = mi._getProductDetails($(this));
                p = mi._addToCart(p);
                $(this).parents(mi.options.productContainerSelector).addClass('sc-added-item').attr('data-product-unique-key', p.unique_key);
           console.log("add cart button" )
           
           var y2 = document.getElementById("btn4");
               
              y2.style.display = "block";

          show();
           var $test;
            function show() {
            if ((document.getElementById("btn4").style.visibility = "hidden") | ($test!="visible"))
            {document.getElementById("btn4").style.visibility = "visible";
            $test="visible"
            }
            else  
            {document.getElementById("btn4").style.visibility = "hidden";
            $test="hidden"}
            }
        
        somStr += "| Product name = " + proName + " , Price $" + proPrice + " x " + proQuan + " - Groceries from: " + shpDept1  + '\n'
       
          
        
        
        
        
theStr = Date() + '\n' + '\n' + somStr + '\n' + "Payment total is $" + proTotal + " plus Service charge $***" + '\n' + "our acc no is 1234567 345"


        
     

       document.getElementById("myTextarea").value = theStr;
          
            });

    


            $(document).ready(function(){

           

                $("#btn4").click(function(){
                    
                   
                    console.log("this is button 4 ");
                   // payTotal = "the total is " + subtotal;
                   // somStr= "masuk bah";
                
                    });

                  $("#btn5").click(function(){
                    
                  console.log("this is button 5 ");
                  document.getElementById("myTextarea").value = "";
                somStr="";
                  });


              });

            // Item quantity change event
            $(this.cart_element).on("change", '.sc-cart-item-qty', function (e) {
                e.preventDefault();
                mi._updateCartQuantity($(this).parents('.sc-cart-item').data('unique-key'), $(this).val());
                console.log("numeric stepper")
            });

           

            // Cart clear event
            $(this.cart_element).on("click", '.sc-cart-clear', function (e) {
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                e.preventDefault();
                $('.sc-cart-item-list > .sc-cart-item', this.cart_element).fadeOut("normal", function () {
                    $(this).remove();
                    mi._clearCart();
                    mi._hasCartChange();
                });
                console.log("clear button")
                proName = null;
                proPrice = null;
                proQuan = null;
                proTotal = null;

                console.log("jquery clear ");
                document.getElementById("myTextarea").value = "";
              somStr="";
              //to hide checkout

              var x2 = document.getElementById("btn4");
               
              x2.style.display = "none";

              document.getElementById('result-textarea2').innerHTML = null;

                document.getElementById('cacStr').innerHTML = null;

            });

            //created by me
            $(this.cart_element).on("click", '.sc-cart-debug', function (e) {
            
                
         
               
            });
        },
        /* 
         * Get the parameters of a product by seaching elements with name attribute/data.
         * Product details will be return as an object
         */
        _getProductDetails: function (elm) {
            var mi = this;
            var p = {};
            var arr = new Array(0); //3 is start of jumble array
            //var newStr = new String();
            
            
            elm.parents(this.options.productContainerSelector).find(this.options.productElementSelector).each(function () {
                if ($(this).is('[name]') === true || typeof $(this).data('name') !== typeof undefined) {
                    var key = $(this).attr('name') ? $(this).attr('name') : $(this).data('name');
                    var val = mi._getContent($(this));
                   
                    if (key && val) {
                        p[key] = val;
                        // collect item is val
                        arr.push(val) 
                        proQuan = arr[3];
                        proPrice = arr[4];
                        proName = arr[1];
                        conArr.push(proQuan,proPrice,proName)
                        
                     

                    }
                   
                    
                }
               
               
            });
            
            console.log("product name " + proName)
            console.log("product price " + proPrice)
            console.log("product quantity " + proQuan)

            return p;
            
        },

        
        /* 
         * Add the product object to the cart
         */
        _addToCart: function (p) {
            var mi = this;

            if (!p.hasOwnProperty(this.options.paramSettings.productPrice)) {
                this._logError('Price is not set for the item');
                return false;
            }

            if (!p.hasOwnProperty(this.options.paramSettings.productQuantity)) {
                this._logMessage('Quantity not found, default to 1');
                p[this.options.paramSettings.productQuantity] = 1;
            }

            if (!p.hasOwnProperty('unique_key')) {
                p.unique_key = this._getUniqueKey();
            }

            if (this.options.combineProducts) {
                var pf = $.grep(this.cart, function (n, i) {
                    return mi._isObjectsEqual(n, p);
                });
                if (pf.length > 0) {
                    var idx = this.cart.indexOf(pf[0]);
                    this.cart[idx][this.options.paramSettings.productQuantity] = this.cart[idx][this.options.paramSettings.productQuantity] - 0 + (p[this.options.paramSettings.productQuantity] - 0);
                    p = this.cart[idx];
                   
                    // Trigger "itemUpdated" event
                    this._triggerEvent("itemUpdated", [p]);
                } else {
                    this.cart.push(p);
                    // Trigger "itemAdded" event
                    this._triggerEvent("itemAdded", [p]);
                }
            } else {
                this.cart.push(p);
                // Trigger "itemAdded" event
                this._triggerEvent("itemAdded", [p]);
            }
            
            this._addUpdateCartItem(p);
            return p;
           
        },
        /* 
         * Remove the product object from the cart
         */
        _removeFromCart: function (unique_key) {
            var mi = this;
            $.each(this.cart, function (i, n) {
                if (n.unique_key === unique_key) {
                    var itemRemove = mi.cart[i];
                    mi.cart.splice(i, 1);
                    $('*[data-product-unique-key="' + unique_key + '"]').removeClass('sc-added-item');
                    mi._hasCartChange();

                    // Trigger "itemRemoved" event
                    this._triggerEvent("itemRemoved", [itemRemove]);
                    return false;
                }
            });
        },
        /* 
         * Clear all products from the cart
         */
        _clearCart: function () {
            this.cart = [];
            // Trigger "cartCleared" event
            this._triggerEvent("cartCleared");
            this._hasCartChange();
        },
        /* 
         * Update the quantity of an item in the cart
         */
        _updateCartQuantity: function (unique_key, qty) {
            var mi = this;
            var qv = this._getValidateNumber(qty);
            $.each(this.cart, function (i, n) {
                if (n.unique_key === unique_key) {
                    if (qv) {
                        mi.cart[i][mi.options.paramSettings.productQuantity] = qty;
                    }
                    mi._addUpdateCartItem(mi.cart[i]);
                    // Trigger "quantityUpdate" event
                    this._triggerEvent("quantityUpdated", [mi.cart[i], qty]);
                    return false;
                }
            });
        },
        /* 
         * Update the UI of the cart list
         */
        _addUpdateCartItem: function (p) {
            var productAmount = (p[this.options.paramSettings.productQuantity] - 0) * (p[this.options.paramSettings.productPrice] - 0);
            var cartList = $('.sc-cart-item-list', this.cart_element);
            var elmMain = cartList.find("[data-unique-key='" + p.unique_key + "']");
            if (elmMain && elmMain.length > 0) {
                elmMain.find(".sc-cart-item-qty").val(p[this.options.paramSettings.productQuantity]);
                elmMain.find(".sc-cart-item-amount").text(this._getMoneyFormatted(productAmount));
                
            } else {
                elmMain = $('<div></div>').addClass('sc-cart-item list-group-item');
               // elmMain.append('<button type="button" class="sc-cart-remove">' + this.options.lang.cartRemove + '</button>');
                elmMain.attr('data-unique-key', p.unique_key);

                elmMain.append(this._formatTemplate(this.options.cartItemTemplate, p));

                var itemSummary = '<div class="sc-cart-item-summary"><span class="sc-cart-item-price">' + this._getMoneyFormatted(p[this.options.paramSettings.productPrice]) + '</span>';
                itemSummary += ' × <input type="number" min="1" max="1000" class="sc-cart-item-qty" value="' + this._getValueOrEmpty(p[this.options.paramSettings.productQuantity]) + '" />';
                itemSummary += ' = <span class="sc-cart-item-amount">' + this._getMoneyFormatted(productAmount) + '</span></div>';

                elmMain.append(itemSummary);
                cartList.append(elmMain);
            }

            // Apply the highlight effect
            if (this.options.highlightEffect === true) {
                elmMain.addClass('sc-highlight');
                setTimeout(function () {
                    elmMain.removeClass('sc-highlight');
                }, 500);
            }

            this._hasCartChange();
            
        },
        /* 
         * Handles the changes in the cart 
         */
        _hasCartChange: function () {
            $('.sc-cart-count', this.cart_element).text(this.cart.length);
            $('.sc-cart-subtotal', this.element).text(this._getCartSubtotal());

            if (this.cart.length === 0) {
                $('.sc-cart-item-list', this.cart_element).empty().append($('<div class="sc-cart-empty-msg">' + this.options.lang.cartEmpty + '</div>'));
                $(this.options.productContainerSelector).removeClass('sc-added-item');
                //this
             //   $('.sc-cart-checkout, .sc-cart-clear').addClass('disabled');

                // Trigger "cartEmpty" event
                this._triggerEvent("cartEmpty");
            } else {
                $('.sc-cart-item-list > .sc-cart-empty-msg', this.cart_element).remove();
                //this
              //  $('.sc-cart-checkout, .sc-cart-clear').removeClass('disabled');
            }

            // Update cart value to the  cart hidden element 
            $('#' + this.options.resultName, this.cart_element).val(JSON.stringify(this.cart));
        },
        /* 
         * Calculates the cart subtotal
         */
        _getCartSubtotal: function () {
            
            var mi = this;
            var subtotal = 0;
            var inproPartn = 0;
            $.each(this.cart, function (i, p) {
                if (mi._getValidateNumber(p[mi.options.paramSettings.productPrice])) {
                    inproPartn = (p[mi.options.paramSettings.productPrice] - 0);
                    proPart = (inproPartn * proQuan);
                    subtotal += (p[mi.options.paramSettings.productPrice] - 0) * (p[mi.options.paramSettings.productQuantity] - 0);
                    proTotal = subtotal;
                    console.log("this happening " + proTotal);
                    console.log("partition total " + (inproPartn * proQuan));
                }
            });
            return this._getMoneyFormatted(subtotal);

        },
       
        _getContent: function (elm) {
            if (elm.is(":checkbox, :radio")) {
                return elm.is(":checked") ? elm.val() : '';
            } else if (elm.is("[value], select")) {
                return elm.val();
            } else if (elm.is("img")) {
                return elm.attr('src');
            } else {
                return elm.text();
            }
            return '';
        },
        /* 
         * Compare equality of two product objects
         */
        _isObjectsEqual: function (o1, o2) {
            if (Object.getOwnPropertyNames(o1).length !== Object.getOwnPropertyNames(o2).length) {
                return false;
            }
            for (var p in o1) {
                if (p === 'unique_key' || p === this.options.paramSettings.productQuantity) {
                    continue;
                }
                if (typeof o1[p] === typeof undefined && typeof o2[p] === typeof undefined) {
                    continue;
                }
                if (o1[p] !== o2[p]) {
                    return false;
                }
            }
            return true;
        },
        /* 
         * Format money
         */
        _getMoneyFormatted: function (n) {
            n = n - 0;
            return Number(n.toFixed(2)).toLocaleString(this.options.currencySettings.locales, this.options.currencySettings.currencyOptions);
        },
        /* 
         * Get the value of an element and empty value if the element not exists 
         */
        _getValueOrEmpty: function (v) {
            return v && typeof v !== typeof undefined ? v : '';
        },
        /* 
         * Validate Number
         */
        _getValidateNumber: function (n) {
            n = n - 0;
            if (n && n > 0) {
                return true;
            }
            return false;
        },
        /* 
         * Small templating function
         */
        _formatTemplate: function (t, o) {
            var r = t.split("{"),
                fs = '';
            for (var i = 0; i < r.length; i++) {
                var vr = r[i].substring(0, r[i].indexOf("}"));
                if (vr.length > 0) {
                    fs += r[i].replace(vr + '}', this._getValueOrEmpty(o[vr]));
                } else {
                    fs += r[i];
                }
            }
            return fs;
        },
        /* 
         * Event raiser
         */
        _triggerEvent: function (name, params) {
            // Trigger an event
            var e = $.Event(name);
            this.cart_element.trigger(e, params);
            if (e.isDefaultPrevented()) {
                return false;
            }
            return e.result;
        },
        /* 
         * Get unique key
         */
        _getUniqueKey: function () {
            var d = new Date();
            return d.getTime();
        },
        /* 
         * Log message to console
         */
        _logMessage: function (msg) {
            if (this.options.debug !== true) {
                return false;
            }
            // Log message
            console.log(msg);
        },
        /* 
         * Log error to console and terminate execution
         */
        _logError: function (msg) {
            if (this.options.debug !== true) {
                return false;
            }
            // Log error
            $.error(msg);
        },

        // PUBLIC FUNCTIONS
        /* 
         * Public function to sumbit the cart
         */
        submit: function () {
            this._submitCart();
        },
        /* 
         * Public function to clear the cart
         */
        clear: function () {
            this._clearCart();
        }
    });

    // Wrapper for the plugin
    $.fn.smartCart = function (options) {
        var args = arguments;
        var instance;

        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, "smartCart")) {
                    $.data(this, "smartCart", new SmartCart(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            instance = $.data(this[0], 'smartCart');

            if (options === 'destroy') {
                $.data(this, 'smartCart', null);
            }

            if (instance instanceof SmartCart && typeof instance[options] === 'function') {
                return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            } else {
                return this;
            }
        }
    };


    

})(jQuery, window, document);



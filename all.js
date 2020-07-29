Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    }
});
import zh_TW from './zh_TW.js';
VeeValidate.localize('tw', zh_TW);

Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
    el:'#app',
    data:{
        products:[],
        tempProduct:{
            num:0,
        },
        status:{
            loadingItem:'',
        },
        form:{
            name:'',
            email:'',
            tel:'',
            address:'',
            payment:'',
            message:'',
        },
        isLoading:false,
        carts:[],
        cartTotal:0,
        UUID:'1f1839a8-d78f-4fc7-b088-b55e63cc35a3',
        APIPATH:'https://course-ec-api.hexschool.io/',
    },
    // 有機會重複寫在方法
    methods:{
        getProducts(page = 1){
            this.isLoading = true;
            const url = `${this.APIPATH}/api/${this.UUID}/ec/products?page=${page}`;
            axios.get(url).then(res =>{
                // console.log(res);
                this.isLoading = false;
                this.products = res.data.data;
            }).catch(error => {
                this.isLoading = false;
            })
        },
        // addToCart(id, quantity = 1){
        //     const url = `${this.APIPATH}/api/${this.UUID}/ec/shopping`;
        //     const cart = {
        //         product:id,
        //         quantity,
        //     };
        //     axios.post(url, cart).then(res => {
        //         console.log(res);
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })
        // },
        // getProduct(id){
        //     this.status.loadingItem = id;
        //     const url = `${this.APIPATH}/api/${this.UUID}/ec/product/${id}`;
        //     console.log(id);
        //     axios.get(url).then(res =>{
        //         console.log(res);
        //         this.status.loadingItem = '';
        //         this.tempProduct = res.data.data;
        //         $('#productModal').modal('show');
        //     })
        // },
    //     getCart(){
    //         this.isLoading = true;
    //         const url = `${this.APIPATH}/api/${this.UUID}/ec/shopping`;
    //         axios.get(url).then(res => {
    //             console.log('購物車', res)
    //             this.carts = res.data.data;
    //             this.updateTotal();
    //             })
    //     },
    //     updateTotal(){
    //         this.carts.forEach(item =>{
    //             this.cartTotal += item.product.price * item.quantity;
    //     });
    //     },
    //     updateQuantity(id, quantity){
    //         const url = `${this.APIPATH}/api/${this.UUID}/ec/shopping`;
    //         this.isLoading = true;
    //         const cart = {
    //             product: id,
    //             quantity,
    //         };
    //         console.log(cart);
    //         axios.patch(url, cart).then(res =>{
    //             this.isLoading = false;
    //             console.log(res);
    //         })
    //         .catch(error => {
    //             this.isLoading = false;
    //             console.log(error.response);
    //         });
    //     }
    },
     // 完全不重複寫在created
     created(){
        this.getProducts();
        // this.getCart();
    },
})


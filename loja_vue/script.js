// Componente responsável por apresentar cada produto

const ProductCard = {

    // Informações recebidas do componente principal
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    // Evento que será enviado ao componente principal
    emits: ["add-to-cart"],

    // Estrutura visual do componente
    template: `
        <div class="card">

            <img
                :src="product.image"
                :alt="product.name"
            >

            <div class="card-conteudo">

                <h3>{{ product.name }}</h3>

                <p class="preco">
                    R$ {{ product.price.toFixed(2).replace(".", ",") }}
                </p>

                <button
                    @click="$emit('add-to-cart', product)"
                >
                    Adicionar ao Carrinho
                </button>

            </div>

        </div>
    `
};


// Criação da aplicação Vue

const app = Vue.createApp({

    // Dados utilizados pela aplicação
    data() {

        return {

            // Contador do carrinho
            carrinho: 0,

            // Texto digitado na pesquisa
            pesquisa: "",

            // Lista de produtos
            produtos: [

                {
                    id: 1,
                    name: "Fone de Ouvido",
                    price: 149.90,
                    image: "https://static.hayapek.com.br/produtos/80054/2000/1.jpg"
                },

                {
                    id: 2,
                    name: "Relógio Digital",
                    price: 199.90,
                    image: "https://images.tcdn.com.br/img/img_prod/1087072/relogio_smartwatch_x_watch_preto_com_alexa_1460_1_acdfd0a488affed854938b88c640670c.jpg"
                },

                {
                    id: 3,
                    name: "Mochila",
                    price: 129.90,
                    image: "https://m.media-amazon.com/images/I/81ipGU3mK0L._AC_SX679_.jpg"
                },

                {
                    id: 4,
                    name: "Teclado Mecânico",
                    price: 249.90,
                    image: "https://tse4.mm.bing.net/th/id/OIP.bPl3R1qP-Agt5mcttILp1QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                },

                {
                    id: 5,
                    name: "Mouse Gamer",
                    price: 89.90,
                    image: "https://i5.walmartimages.com/seo/RGB-Wired-Gaming-Mouse-Ergonomic-With-7-Backlight-Modes-6-Keys-4-Speed-Adjustable-For-Laptop-PC-Gamers-Wireless-Mouth-Mouses-Computers-Moue-Mice_1942ec8b-4122-4d2e-950f-1272baef4f21.1e56fd2dcecbfce38210fdc8a7f77730.jpeg"
                },

                {
                    id: 6,
                    name: "Caixa de Som",
                    price: 179.90,
                    image: "https://m.media-amazon.com/images/I/71mWUtcfPwL._AC_SX679_.jpg"
                }
            ]
        };
    },


    // Propriedades calculadas
    computed: {

        produtosFiltrados() {

            return this.produtos.filter(produto =>

                produto.name
                    .toLowerCase()
                    .includes(this.pesquisa.toLowerCase())
                );
        }
    },

    // Funções da aplicação
    methods: {

        adicionarAoCarrinho(produto) {
            this.carrinho++;
            console.log(`${produto.name} foi adicionado ao carrinho.`);
        }
    }
});


// Registra o componente ProductCard

app.component("ProductCard", ProductCard);


// Inicia a aplicação dentro do HTML

app.mount("#app");
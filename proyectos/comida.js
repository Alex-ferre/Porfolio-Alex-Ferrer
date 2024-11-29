const foodData = [
    {
        name: "Manzana",
        type: "fruit",
        color: "red",
        image: "https://www.bupasalud.com/sites/default/files/inline-images/fuji-red.jpg",
        nutrition: {
            calories: 52,
            protein: "0.3g",
            carbs: "14g",
            fiber: "2.4g",
            vitamins: ["C", "K"]
        },
        recipe: {
            name: "Tarta de Manzana",
            ingredients: [
                "4 manzanas",
                "1 taza de harina",
                "1/2 taza de azúcar",
                "1 huevo"
            ],
            instructions: [
                "Pelar y cortar las manzanas",
                "Mezclar los ingredientes secos",
                "Hornear a 180°C por 45 minutos"
            ]
        }
    },
    // Añadir más frutas y verduras aquí
    {
        name: "Plátano",
        type: "fruit",
        color: "yellow",
        image: "https://i.blogs.es/81b63d/platanos/500_333.jpeg",
        nutrition: {
            calories: 100,
            protein: "0.5g",
            carbs: "23g",
            fiber: "2.6g",
            vitamins: ["B6", "B12"]
        },
        recipe: {
            name: "Plátano al horno",
            ingredients: [
                "1 platano maduro",
                "Aceite de oliva",
                "Sal",
                "Pimienta"
            ],
            instructions: [
                "Quitarle la piel al platano",
                "Cortarlo a lo largo en juliana",
                "Una vez cortado, en un bol ponemos la sal y pimienta",
                "Lo ponemos en una bandeja con papel de horno o vegetal",
                "Hornear a 180°C por 45 minutos"
            ]
        }
    },
    // Añadir más frutas y verduras aquí

    {
        name: "Cereal",
        type: "vegetable",
        color: "white",
        image: "https://www.goredforwomen.org/-/media/Images/Healthy-Living/Healthy-Eating/Types_Of_Whole_Grains.jpg?sc_lang=es",
        nutrition: {
            calories: 1000,
            protein: "10g",
            carbs: "30g",
            fiber: "15g",
            vitamins: []
        },
        recipe: {
            name: "Cereal con Leche",
            ingredients: [
                "1 taza de cereal",
                "1/2 taza de leche"
            ],
            instructions: [
                "Mojar el cereal en la leche",
                "Servir"
            ]
        }
    },
    // Añadir más frutas y verduras aquí
    {
        name: "Bimi",
        type: "vegetable",
        color: "green",
        image: "https://d1nfjnh4xzmgco.cloudfront.net/images/bimi/carousel/_hero/1147423/320759173_444372134554916_426130685953615021_n.webp",
        nutrition: {
            calories: 500,
            protein: "20g",
            carbs: "2.7g",
            fiber: "30g",
            vitamins: ["A", "C", "E"],
        },
        recipe: {
            name: "Bimi con verduras saltedas",
            ingredients: [
                "1 bimi",
                "1/4 pimiento verde",
                "1/4 pimiento rojo",
                "1/2 zanahoria",
                "1/2 tomate",
                "Lomo bajo de ternera",
                "Salsa de ostras",
                "Azucar moreno",
                "Salsa de soja"
            ],

            sauceIngredient: [
                "En un bol ponemos la salsa de ostras",
                "En este mismo añadimos azúcar moreno",
                "Cuando esten disuelto el mejunje Art Attack lo ponemos en una cazuela pequeña y a fuego medio-bajo",
                "Despúes de 5 minutos al fuego y este mas líquida la reservamos a temperatura ambiente",
                "Hasta que este la carne y las verduras recién hechas se tiene que haver hecho un poco sólida."
            ],
            instructions: [
                "Cortar las verduras",
                "Cortar el lomo bajo de ternera",
                "En un wok ponemos un poco de aceite y a fuego alto",
                "Cuando el aceite este bien caliente añadimos las verduras",
                "Una vez hechas las verduras ponemos la carne",
                "Despues de que la carne este hecha ",
                "Dejamos enfriar unos 2 - 3 minutos",
                 "ahora a disfrutar del plato 😋😮"

            ]
        }
    },
    // Añadir más frutas y verduras aquí
    {
        name: "Romanesco",
        type: "vegetable",
        color: "green",
        image: "https://img2.rtve.es/i/?w=1600&i=1645434225293.jpg",
        nutrition: {
            calories: 31,
            protein: "2.48g",
            carbs: "5.4g",
            fiber: "2-3g",
            vitamins: ["A", "C", "E"],
        },
        recipe: {
            name: "Romanesco al horno",
            ingredients: [
                "1 romanesco",
                "Aceite de oliva",
                "Sal",
                "Pimienta"
            ],

            instructions: [
                "Cortar el romanesco en arboles de tamaño medio",
                "En un bol ponemos el aceite de oliva",
                "Añadimos sal y pimienta",
                "Ponemos el romanesco en una bandeja con papel de horno o vegetal",
                "Hornear a 180°C por 45 minutos"
            ]
        }
    },

    {
        name: "Pimiento Rojo",
        type: "vegetable",
        color: "red",
        image: "https://img2.rtve.es/i/?w=1600&i=1645434225293.jpg",
        nutrition: {
            calories: 31,
            protein: "2.48g",
            carbs: "5.4g",
            fiber: "2-3g",
            vitamins: ["A", "C", "E"],
        },
        recipe: {
            name: "Romanesco al horno",
            ingredients: [
                "1 romanesco",
                "Aceite de oliva",
                "Sal",
                "Pimienta"
            ],

            instructions: [
                "Cortar el romanesco en arboles de tamaño medio",
                "En un bol ponemos el aceite de oliva",
                "Añadimos sal y pimienta",
                "Ponemos el romanesco en una bandeja con papel de horno o vegetal",
                "Hornear a 180°C por 45 minutos"
            ]
        }
    },

    {
        name: "Naranja",
        type: "fruit",
        color: "orange",
        image: "https://www.frutamare.com/wp-content/uploads/2018/08/navelate_plus.jpg.webp",
        nutrition: {
            calories: 60,
            protein: "1.2g",
            carbs: "15g",
            fiber: "3g",
            vitamins: ["C", "B1", "B2", "B3", "B5", "B6", "B9", "B12", "E"],
        },
        recipe: {
            name: "Naranja escarchada",
            ingredients: [
                "1 naranja",
                "Azucar",
                "Agua"
            ],

            instructions: [
                "Cortar la naranja en rodajas",
                "En un cazo ponemos el azucar y el agua",
                "Cuando el azucar este derretido añadimos la naranja",
                "Y movemos para que se mezclen bien los ingredientes",
                "Dejamos enfriar y que el azucar se solidifique"
            ]
        }
    },


    

    
];

function createFoodCard(food) {
    return `
        <div class="food-card" onclick="showDetails('${food.name}')">
            <img src="${food.image}" alt="${food.name}" class="food-image">
            <div class="food-info">
                <h3 class="food-name">${food.name}</h3>
                <span class="food-type" style="background: ${food.type === 'fruit' ? '#FF9800' : '#2196F3'}; color: white;">
                    ${food.type === 'fruit' ? 'Fruta' : 'Verdura'}
                </span>
            </div>
        </div>
    `;
}

function filterItems(filter) {
    const grid = document.getElementById('foodGrid');
    grid.innerHTML = foodData
        .filter(food => {
            if (filter === 'all') return true;
            if (filter === 'fruit' || filter === 'vegetable') return food.type === filter;
            return food.color.toLowerCase() === filter.toLowerCase() || 
                   food.name.toLowerCase() === filter.toLowerCase();
        })
        .map(food => createFoodCard(food))
        .join('');
}

function showDetails(foodName) {
    const food = foodData.find(f => f.name === foodName);
    const modal = document.getElementById('foodModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <h2>${food.name}</h2>
        <table class="nutrition-table">
            <tr>
                <th>Nutriente</th>
                <th>Cantidad</th>
            </tr>
            <tr>
                <td>Calorías</td>
                <td>${food.nutrition.calories || 'No disponible'}</td>
            </tr>
            <tr>
                <td>Proteínas</td>
                <td>${food.nutrition.protein !== '0g' ? food.nutrition.protein : 'No disponible'}</td>
            </tr>
            <tr>
                <td>Carbohidratos</td>
                <td>${food.nutrition.carbs !== '0g' ? food.nutrition.carbs : 'No disponible'}</td>
            </tr>
            <tr>
                <td>Fibra</td>
                <td>${food.nutrition.fiber !== '0g' ? food.nutrition.fiber : 'No disponible'}</td>
            </tr>
        </table>

        <div class="recipe">
            <h3>Receta: ${food.recipe.name}</h3>
            <h4>Ingredientes:</h4>
            <ul>
                ${food.recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
            
            ${food.recipe.sauceIngredient ? `
                <h4>Ingredientes para la Salsa:</h4>
                <ul>
                    ${food.recipe.sauceIngredient.map(i => `<li>${i}</li>`).join('')}
                </ul>
            ` : ''}

            <h4>Instrucciones:</h4>
            <ol>
                ${food.recipe.instructions.map(i => `<li>${i}</li>`).join('')}
            </ol>
        </div>
    `;

    modal.style.display = 'block';
}


function closeModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Añadir la funcionalidad de búsqueda
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredFood = foodData.filter(food => 
        food.name.toLowerCase().includes(searchTerm) ||
        food.type.toLowerCase().includes(searchTerm) ||
        food.color.toLowerCase().includes(searchTerm)
    );
    
    renderFood(filteredFood);
});

function renderFood(foods) {
    const grid = document.getElementById('foodGrid');
    grid.innerHTML = foods.map(food => createFoodCard(food)).join('');
}

// Cargar todos los items al inicio
filterItems('all');
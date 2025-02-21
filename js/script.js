fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => {
        let tabla = "";
        data.forEach(product => {
            tabla += `
                <tr>
                    <td>${product.title}</td>
                    <td>$${product.price}</td>
                    <td>${product.description}</td>
                    <td>${product.category.name}</td>
                    <td><a href="https://api.escuelajs.co/api/v1/products/${product.id}" target="_blank">Ver producto</a></td>
                </tr>
            `;
        });
        document.getElementById("tblProducts").innerHTML = tabla;
    })
    .catch(error => console.error("Error al obtener los datos: ", error));

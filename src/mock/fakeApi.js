const productos = [
    {
        id: '001',
        nombreProducto: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        stock: 10,
        precio: 1500,
        descripcion: 'Obra maestra de Gabriel García Márquez que narra la historia de la familia Buendía en el ficticio pueblo de Macondo.',
        urlImagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg',
        categoria: 'Literatura'
    },
    {
        id: '002',
        nombreProducto: '1984',
        autor: 'George Orwell',
        stock: 8,
        precio: 1200,
        descripcion: 'Distopía de George Orwell que presenta un futuro totalitario y vigilado donde la libertad individual está amenazada.',
        urlImagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg',
        categoria: 'Literatura'
    },
    {
        id: '003',
        nombreProducto: 'El nombre del viento',
        autor: 'Patrick Rothfuss',
        stock: 15,
        precio: 1800,
        descripcion: 'Primera entrega de la saga "Crónica del asesino de reyes" de Patrick Rothfuss, que sigue las aventuras del músico y mago Kvothe.',
        urlImagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/a7/90/a790dff70defe5c61b66fd73716b6e30.jpg',
        categoria: 'Fantasía'
    },
    {
        id: '004',
        nombreProducto: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        stock: 20,
        precio: 1350,
        descripcion: 'Primer libro de la serie de Harry Potter de J.K. Rowling, que sigue las aventuras del joven mago en Hogwarts.',
        urlImagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b2/b8/b2b8f402ecba8e723dd61dd6d824b1d3.jpg',
        categoria: 'Fantasía'
    },
    {
        id: '005',
        nombreProducto: 'El amor en los tiempos del cólera',
        autor: 'Gabriel García Márquez',
        stock: 12,
        precio: 1600,
        descripcion: 'Novela de Gabriel García Márquez que narra la historia de amor entre Fermina Daza y Florentino Ariza a lo largo de décadas.',
        urlImagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ac/2d/ac2d0aa8cd9e21558d7b0778fdfd4a6b.jpg',
        categoria: 'Literatura'
    },
    {
        id: '006',
        nombreProducto: 'El señor de los anillos: La comunidad del anillo',
        autor: 'J.R.R. Tolkien',
        stock: 18,
        precio: 2200,
        descripcion: 'Primera parte de la trilogía épica de J.R.R. Tolkien que sigue la búsqueda del anillo único por parte de Frodo y su compañía.',
        urlImagen: 'https://dcdn.mitiendanube.com/stores/057/977/products/getimageurl-12-72b97f230f46c267d316971144266408-1024-1024.jpg',
        categoria: 'Fantasía'
    },
    {
        id: '007',
        nombreProducto: 'El código Da Vinci',
        autor: 'Dan Brown',
        stock: 25,
        precio: 1450,
        descripcion: 'Thriller de misterio de Dan Brown que sigue al simbólogo Robert Langdon en una investigación relacionada con el Santo Grial.',
        urlImagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/ef/0f/ef0fe302954a688d71d2a988393ad609.jpg',
        categoria: 'Misterio'
    },
    {
        id: '008',
        nombreProducto: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        stock: 14,
        precio: 1550,
        descripcion: 'Clásico de la literatura romántica de Jane Austen que sigue las complejas relaciones sociales en la Inglaterra del siglo XIX.',
        urlImagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/69/73/697367de2a03bc98c4cb963d35ae2af2.jpg',
        categoria: 'Romance'
    },
    {
        id: '009',
        nombreProducto: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        stock: 20,
        precio: 1250,
        descripcion: 'Novela corta de Gabriel García Márquez que relata los eventos que llevan a la muerte de Santiago Nasar.',
        urlImagen: 'https://http2.mlstatic.com/D_NQ_NP_995510-MLC44095966806_112020-O.webp',
        categoria: 'Literatura'
    },
    {
        id: '010',
        nombreProducto: 'El alquimista',
        autor: 'Paulo Coelho',
        stock: 30,
        precio: 1100,
        descripcion: 'Novela de superación personal de Paulo Coelho que sigue el viaje de Santiago en busca de su tesoro personal.',
        urlImagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/f2/56/f2560b3e62e4bffef91b3cb73d4a622e.jpg',
        categoria: 'Ficción'
    },
    {
        id: '011',
        nombreProducto: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        stock: 16,
        precio: 1650,
        descripcion: 'Novela de misterio y romance de Carlos Ruiz Zafón que sigue a Daniel Sempere en su búsqueda del autor desconocido de un libro.',
        urlImagen: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/624973.jpg',
        categoria: 'Misterio'
    },
    {
        id: '012',
        nombreProducto: 'Matar a un ruiseñor',
        autor: 'Harper Lee',
        stock: 22,
        precio: 1400,
        descripcion: 'Clásico de la literatura estadounidense de Harper Lee que aborda temas de raza e injusticia en el sur de Estados Unidos.',
        urlImagen: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/690144.jpg',
        categoria: 'Ficción'
    },
    {
        id: '013',
        nombreProducto: 'La ciudad y los perros',
        autor: 'Mario Vargas Llosa',
        stock: 11,
        precio: 1750,
        descripcion: 'Novela del Premio Nobel de Literatura Mario Vargas Llosa que sigue la vida de cadetes en una escuela militar en Lima.',
        urlImagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/46/0c/460cf768bec27103e3d93791c2770ba5.jpg',
        categoria: 'Literatura'
    },
    {
        id: '014',
        nombreProducto: 'Mujercitas',
        autor: 'Louisa May Alcott',
        stock: 19,
        precio: 1300,
        descripcion: 'Clásico de la literatura estadounidense de Louisa May Alcott que sigue las vidas de las hermanas March durante la Guerra Civil.',
        urlImagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/d5/29/d529d8a4aadeeb30538b5fe7adb4a289.jpg',
        categoria: 'Literatura'
    },
    {
        id: '015',
        nombreProducto: 'El retrato de Dorian Gray',
        autor: 'Oscar Wilde',
        stock: 9,
        precio: 1450,
        descripcion: 'Novela de Oscar Wilde que explora la vanidad y la corrupción moral a través del retrato envejeciente de Dorian Gray.',
        urlImagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg',
        categoria: 'Ficción'
    }
];



export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (error) {
                reject("TENES UN PROBLEMA , INTENTE NUEVAMENTE")
            }
            else {
                resolve(productos)
            }

        }, 2000)
    })
}



export const getOneProduct = (id) =>{

    let error = false
    
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema')
            }
            else{
                let productoBuscado = productos.find((item)=>item.id===id)
                resolve(productoBuscado)
            }
        },2000)
    }
    )
}
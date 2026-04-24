const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px){

        /* Resetear posicionamiento absoluto del CSS original */
        header {
            position: static;
            transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.4rem;
            padding: 1rem;
            height: auto;
        }

        .bloque_azul {
            position: static;
            left: 0;
            width: 100%;
            text-align: center;
        }

        nav {
            position: static;
            transform: none;
            width: 100%;
        }

        .bloque_2 {
            position: static;
            left: 0;
            bottom: 0;
            width: 100%;
            height: auto;
        }

        aside {
            position: static;
            transform: none;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 1rem;
        }

        .bloque_3 {
            position: static;
            width: 90%;
            height: auto;
            margin: 1rem auto;
            padding: 1rem;
            box-sizing: border-box;
        }

        #parrafo {
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 0.5rem;
        }

        main {
            position: static;
            transform: none;
            top: 0;
            left: 0;
            width: 100%;
            font-size: 1rem;
        }

        .bloque_4 {
            position: static;
            width: 90%;
            height: auto;
            margin: 1rem auto;
            padding: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .imagen_1, .imagen_2, .imagen_3, .imagen_4 {
            position: static;
            width: 100%;
            height: auto;
        }

        .imagen_1 img,
        .imagen_2 img,
        .imagen_3 img,
        .imagen_4 img {
            position: static;
            width: 100%;
            height: auto;
            display: block;
            border-radius: 0.5rem;
            object-fit: cover;
        }

        footer {
            position: static;
            transform: none;
            width: 100%;
            text-align: center;
        }

        .bloque_5 {
            position: static;
            top: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
        }

        body {
            background-size: cover;
            background-position: center;
        }
    }
`;
document.head.appendChild(mobileStyle);
const menu= document.getElementById('menu');
const foto= document.createElement('img');
foto.src='miku.jpeg';
foto.style.cssText=`
    display:none;
    width:100%;
    height:auto;
    border-radius:8px;
    margin-top:10px;
    `;
menu.parentElement.appendChild(foto);
menu.addEventListener('click',()=>{
    if (foto.style.display=== 'none'){
        foto.style.display='block';
    } else{
        foto.style.display='none';
    }
});
function Lesson07() {
    // * interface - типизация обьекта


    interface ISuperHero {
        id: number;
        name: string;
        nickname: string;
        superpowers?: string[];
        // необязательный ключ в обьекте
        age?: number


    }


    const hero1 = {
        id: 1,
      name: 'Bruce Wayne',
       nickname: 'Batman',
       superpowers: []
        
    };

   const hero2: ISuperHero = {
    
    name: 'Clark Kent',
    nickname: 'Superman',
    id: 2,
    superpowers: ['super fly', 'super vision']

   };


    return (
        <div>
        <h2>Typescript pt2 </h2>
        <p>Самое интересное на этом уроке происходит 
        в теле функции компонента и 
        в командной строке:
         </p>
         </div>
    );
    }

 export default Lesson07;
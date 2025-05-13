let toys = ['Bola','Osso','Corda','Sino']

dogs = [
    {dogName: 'biruliro', toy: ''},
    {dogName: 'birulira', toy: ''},
    {dogName: 'biruliru', toy: ''},
    {dogName: 'birulire', toy: ''}
]

dogs.forEach((dog, index) => {
    dog.toy = toys[index];
    console.log(`The toy ${toys[index]} was given to ${dog.dogName}`);
});

/*
toys.forEach(toy => {
    for (let i = 0; i < dogs.length; i++) {
        dogs[i].toy = toy
        console.log(`The toy ${toy} was given to ${dogs[i].dogName}`)
        //break
    }
    
})
*/



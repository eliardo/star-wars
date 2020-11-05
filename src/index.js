const service = require('./service');

async function main(){
    try {
        const result = await service.getHero(1);
        console.log(
            ` Encontramos seu heroi. \n Seu heroi eh o ${result.name}, ele está em ${result.films.length} filmes \n e tem ${result.vehicles.length} veiculos.`
        )
    } catch (error) {
        console.log(error);
    }
}
console.time('tempo para encontrar o heroi')
main(1).then(()=>{
    console.timeEnd('tempo para encontrar o heroi')
})
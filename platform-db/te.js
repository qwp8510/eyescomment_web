const reo = async() => {
    return ['1', '2', '3'];
};

async function abb() {
    let wow = []
    await reo().then(lp => {
        lp.map(l => {
            wow.push(l); 
            });
        });
    console.log(wow);
}
abb()
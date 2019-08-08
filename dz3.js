let money,name;


function start(){
	money=prompt("Ваш бюджет");
	name=prompt("Название Вашего магазина");
}
start();

let mainList ={
	budjet: money,
	ShopName: name,
	ShopGoods: [],
	employers: {},
	open: false,
	tyme: false
}

for (let i=0;i<5;i++)
{
let a=prompt("Какой товар будем продавать?");

if ((typeof(a))==='string' && (typeof(a)) != null && a!=' ' && a.length <20) {
	console.log("все верно");
	mainList.ShopGoods[i]=a; } 
else 
	{i=--i;}
}
function dayBudjet()
{
alert(mainList.budjet / 30);}


dayBudjet();
console.log(mainList.ShopGoods);
console.log(mainList);
    



let money=prompt("Ваш бюджет");
let name=prompt("Название Вашего магазина");


let mainList ={
	budjet: money,
	ShopName: name,
	ShopGoods: [],
	employers: {},
	open: false
}

for (let i=0;i<5;i++)
{
let a=prompt("Какой товар будем продавать?");

if ((typeof(a))==='string' && (typeof(a)) != null && a!=' ' && a.length <20) {
	console.log("все верно");
	mainList.ShopGoods[i]=a; } 
else 
	{i=i-1;}
 
alert(mainList.budjet / 30);


console.log(mainList.ShopGoods);
console.log(mainList);
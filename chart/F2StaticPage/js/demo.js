const data = [
	{ name: "芳华", proportion: 0.4, a: "1" },
	{ name: "妖猫传", proportion: 0.2, a: "1" },
	{ name: "机器之血", proportion: 0.18, a: "1" },
	{ name: "心理罪", proportion: 0.15, a: "1" },
	{ name: "寻梦环游记", proportion: 0.05, a: "1" },
	{ name: "其他", proportion: 0.02, a: "1" },
];
const chart = new F2.Chart({
	id: "ring",
	width: 300,
	height: 300 * 0.64,
	pixelRatio: window.devicePixelRatio,
});
chart.source(data);
chart.legend({
	position: "left",
});
chart.coord("polar", {
	transposed: true,
	innerRadius: 0.7,
});
chart.axis(false);
chart
	.interval()
	.position("a*proportion")
	.color("name", [
		"#1890FF",
		"#13C2C2",
		"#2FC25B",
		"#FACC14",
		"#F04864",
		"#8543E0",
	])
	.adjust("stack");
// console.log('aaachartdemo', chart)
chart.render();

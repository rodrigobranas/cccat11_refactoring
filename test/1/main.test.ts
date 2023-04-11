import { calculateRide } from "../../src/1/main";

test("Deve calcular a tarifa de uma corrida em um dia normal", function () {
	const input = [
		{
			distance: 10,
			date: new Date("2021-03-01T10:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(21);
});

test("Deve calcular a tarifa de uma corrida em um dia normal com dois segmentos", function () {
	const input = [
		{
			distance: 10,
			date: new Date("2021-03-01T10:00:00")
		},
		{
			distance: 10,
			date: new Date("2021-03-01T10:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(42);
});

test("Deve calcular a tarifa de uma corrida de noite", function () {
	const input = [
		{
			distance: 10,
			date: new Date("2021-03-01T23:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(39);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
	const input = [
		{
			distance: 10,
			date: new Date("2021-03-07T10:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(29);
});

test("Deve calcular a tarifa de uma corrida domingo de noite", function () {
	const input = [
		{
			distance: 10,
			date: new Date("2021-03-07T23:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(50);
});

test("Deve retornar -1 se a distância for inválida", function () {
	const input = [
		{
			distance: -10,
			date: new Date("2021-03-07T23:00:00")
		}
	];
	expect(() => calculateRide(input)).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar -1 se a data for inválida", function () {
	const input = [
		{
			distance: 10,
			date: new Date("abcdef")
		}
	];
	expect(() => calculateRide(input)).toThrow(new Error("Invalid Date"));
});

test("Deve calcular a tarifa de uma corrida mínima", function () {
	const input = [
		{
			distance: 2,
			date: new Date("2021-03-01T10:00:00")
		}
	];
	const fare = calculateRide(input);
	expect(fare).toBe(10);
});

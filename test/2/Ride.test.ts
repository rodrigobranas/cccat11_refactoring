import Ride from "../../src/2/Ride";

test("Deve calcular a tarifa de uma corrida em um dia normal", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-01T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(21);
});

test("Deve calcular a tarifa de uma corrida de noite", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-01T23:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(39);
});

test("Deve calcular a tarifa de uma corrida domingo", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-07T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(29);
});

test("Deve calcular a tarifa de uma corrida domingo de noite", function () {
	const ride = new Ride();
	ride.addSegment(10, new Date("2021-03-07T23:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(50);
});

test("Deve retornar -1 se a distância for inválida", function () {
	const ride = new Ride();
	expect(() => ride.addSegment(-10, new Date("2021-03-07T23:00:00"))).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar -2 se a data for inválida", function () {
	const ride = new Ride();
	expect(() => ride.addSegment(10, new Date("abcdef"))).toThrow(new Error("Invalid Date"));
});

test("Deve calcular a tarifa de uma corrida mínima", function () {
	const ride = new Ride();
	ride.addSegment(2, new Date("2021-03-01T10:00:00"));
	const fare = ride.calculateFare();
	expect(fare).toBe(10);
});
CREATE TABLE "calculator" (
	"id" SERIAL PRIMARY KEY,
	"firstNum" VARCHAR (250) NOT NULL,
	"secondNum" VARCHAR (250) NOT NULL,
	"operator" VARCHAR(250) NOT NULL
);

INSERT INTO "calculator"
	("firstNum", "secondNum", "operator")
VALUES
	('2', '6', '+');
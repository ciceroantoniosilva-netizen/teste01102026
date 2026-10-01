// Menu mobile
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Calculadora
const calculateBtn = document.getElementById("calculate");
const incomeInput = document.getElementById("income");
const expensesInput = document.getElementById("expenses");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
    const income = Number(incomeInput.value);
    const expenses = Number(expensesInput.value);

    if (income <= 0 || expenses < 0) {
        result.textContent = "Digite valores válidos.";
        result.style.color = "#d64545";
        return;
    }

    const balance = income - expenses;
    const percentage = (balance / income) * 100;

    if (balance > 0) {
        result.innerHTML = `
            Você tem <strong>R$ ${balance.toFixed(2).replace(".", ",")}</strong>
            disponíveis neste mês.<br>
            <small>Isso representa ${percentage.toFixed(1)}% da sua renda.</small>
        `;

        result.style.color = "#168657";
    } else if (balance === 0) {
        result.textContent = "Sua renda e suas despesas estão equilibradas.";
        result.style.color = "#c78a00";
    } else {
        result.innerHTML = `
            Suas despesas ultrapassam sua renda em
            <strong>R$ ${Math.abs(balance).toFixed(2).replace(".", ",")}</strong>.
        `;

        result.style.color = "#d64545";
    }
});

// Dicas financeiras
const tips = [
    {
        title: "Comece anotando seus gastos.",
        text: "Saber exatamente quanto você gasta é um dos primeiros passos para organizar suas finanças."
    },
    {
        title: "Crie metas financeiras.",
        text: "Defina objetivos específicos e acompanhe regularmente o quanto já conseguiu avançar."
    },
    {
        title: "Evite compras por impulso.",
        text: "Antes de comprar, pergunte se aquela despesa é realmente necessária e se cabe no seu orçamento."
    },
    {
        title: "Tenha uma reserva financeira.",
        text: "Guardar uma parte da renda pode ajudar você a lidar melhor com imprevistos."
    },
    {
        title: "Compare antes de comprar.",
        text: "Pesquisar preços e condições pode ajudar a tomar decisões de consumo mais conscientes."
    }
];

const tipTitle = document.getElementById("tip-title");
const tipText = document.getElementById("tip-text");
const newTip = document.getElementById("new-tip");

let currentTip = 0;

newTip.addEventListener("click", () => {
    currentTip = (currentTip + 1) % tips.length;

    tipTitle.textContent = tips[currentTip].title;
    tipText.textContent = tips[currentTip].text;
});

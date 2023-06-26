// Função Recursiva

function recursiva(max) {
    console.log(max);
    if (max >= 20) return;
    max++;
    recursiva(max);
}

recursiva(0);
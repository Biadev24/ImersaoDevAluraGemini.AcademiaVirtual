function pesquisar() {
    let termoBusca = document.getElementById("campo-busca").value.toLowerCase(); // Obter o termo de busca e converter para minúsculo
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML = ""; // Limpar os resultados anteriores
        const modalidades = [
        {
          titulo: "Pilates",
          descricao: "Ideal para quem busca um corpo mais forte, flexível e alinhado. Os movimentos precisos e controlados do Pilates trabalham todos os músculos, melhoram a postura e ainda ajudam a relaxar a mente. É como um abraço para o seu corpo!",
          link: "https://pt.wikipedia.org/wiki/Pilates/",
          porcentagemdecaloriasquepodemsergastas: "Ideal para tonificar e alongar os músculos, promovendo um gasto calórico gradual e eficiente.",
          alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
          locaisondepraticar: "Seu corpo, seu espaço. Realize seus exercícios em casa, no parque ou em um estúdio",
          intensidade: "Adapte os movimentos ao seu ritmo e condicionamento físico, desde iniciantes até avançados.",
          beneficios: "Melhora a postura, alivia dores, aumenta a flexibilidade, fortalece o core e proporciona bem-estar mental.",
          musculostrabalhados: "Corpo inteiro, com foco em força e alongamento profundo.",
          precaucoes: "Consulte um profissional antes de iniciar e evite realizar movimentos que causem dor."
        },
        {
          titulo: "Treinamento Funcional",
          descricao: "Quer se sentir mais preparado para o dia a dia? O Treinamento Funcional é perfeito para você! Nele, você realiza exercícios que imitam os movimentos que fazemos no nosso dia a dia, como agachar, levantar e empurrar. É uma forma divertida e eficiente de fortalecer os músculos e melhorar a coordenação.",
          link: "https://pt.wikipedia.org/wiki/Treinamento_funcional",
          porcentagemdecaloriasquepodemsergastas: "Combine força, resistência e coordenação em um único treino, queimando muitas calorias.",
          alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
          locaisondepraticar: "Utilize espaços abertos, parques ou academias para realizar seus exercícios",
          intensidade: "Adapte a intensidade e a complexidade dos exercícios ao seu nível de condicionamento físico",
          beneficios: "Melhora a força, a resistência, a agilidade e a coordenação motora, preparando seu corpo para as atividades do dia a dia",
          musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e estabilização do core",
          precaucoes: "Consulte um profissional para garantir a execução correta dos exercícios e evitar lesões."
        },
        {
          titulo: "Musculação",
          descricao: "Para quem deseja ganhar massa muscular e definir o corpo, a musculação é a escolha certa! Com ela, você esculpe os músculos, aumenta a força e melhora a autoestima. Além disso, a musculação ajuda a fortalecer os ossos e prevenir lesões.",
          link: "https://pt.wikipedia.org/wiki/Muscula%C3%A7%C3%A3o",
          porcentagemdecaloriasquepodemsergastas: "Aumente sua massa muscular e acelere seu metabolismo, queimando mais calorias mesmo em repouso.",
          alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
          locaisondepraticar: "Utilize equipamentos específicos para um treino completo e seguro.",
          intensidade: "Adapte a carga e o número de repetições aos seus objetivos.",
          beneficios: "Aumenta a força, define os músculos, melhora a autoestima e previne lesões.",
          musculostrabalhados: "Todos os grupos musculares, de acordo com o treino escolhido.",
          precaucoes: "Consulte um profissional para elaborar um treino personalizado e seguro."
        },
        {
          titulo: "Aeróbico (Corrida na Esteira)",
          descricao: "Uma atividade cardiovascular que melhora a resistência, queima calorias e tonifica os músculos das pernas. Ideal para quem busca perder peso e melhorar a saúde do coração.",
          link: "https://pt.wikipedia.org/wiki/Corrida",
          porcentagemdecaloriasquepodemsergastas: "Moderada a alta, dependendo da intensidade e duração.",
          alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
          locaisondepraticar: "Academias, residências com esteira, parques (corrida ao ar livre).",
          intensidade: "Variável, desde caminhadas leves até corridas de alta intensidade.",
          beneficios: "Melhora a saúde cardiovascular, fortalece os músculos das pernas, auxilia na perda de peso, reduz o estresse, aumenta a resistência.",
          musculostrabalhados: "Quadríceps, panturrilhas, glúteos, core.",
          precaucoes: "Consultar um médico antes de iniciar, usar calçados adequados, prestar atenção aos sinais do corpo e evitar o overtraining."
      },
      {
        titulo: "Crossfit",
        descricao: "Um programa de treinamento de alta intensidade que combina exercícios variados, funcionais e constantemente variados. Desenvolve força, resistência, flexibilidade e agilidade.",
        link: "https://pt.wikipedia.org/wiki/CrossFit",
        porcentagemdecaloriasquepodemsergastas: "Muito alta, devido à alta intensidade e variedade de exercícios.",
        alimentaçãorecomendada: "Equilibrada, com foco em macronutrientes (carboidratos, proteínas e gorduras) e micronutrientes, para atender às altas demandas energéticas dos treinos.",
        locaisondepraticar: "Boxes de crossfit (academias especializadas).",
        intensidade: "Muito alta, com exercícios que exigem força, resistência e explosão.",
        beneficios: "Melhora a capacidade física geral, aumenta a força, desenvolve a resistência cardiovascular, melhora a coordenação motora, aumenta a densidade mineral óssea.",
        musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e core.",
        precaucoes: "Exige acompanhamento profissional para evitar lesões, iniciar gradualmente, respeitar os limites do corpo."
    },
      ];
      const resultadosFiltrados = modalidades.filter(modalidade => {
        return modalidade.titulo.toLowerCase().includes(termoBusca); // Filtrar por título (pode adicionar mais campos para filtrar)
    });
    
    // Função para gerar o conteúdo dinamicamente

    resultadosFiltrados.forEach(modalidade => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${modalidade.titulo}</h2>
            <p>${modalidade.descricao}</p>
            <a href="${modalidade.link}" target="_blank">Saiba mais</a>
           `;
        section.appendChild(div);
    });
}
// const inputBusca = document.getElementById('busca');
// const sugestoesDiv = document.getElementById('sugestoes');
// const modalidades = [
// {
//     titulo: "Pilates",
//     descricao: "Ideal para quem busca um corpo mais forte, flexível e alinhado. Os movimentos precisos e controlados do Pilates trabalham todos os músculos, melhoram a postura e ainda ajudam a relaxar a mente. É como um abraço para o seu corpo!",
//     link: "https://pt.wikipedia.org/wiki/Pilates/",
//     porcentagemdecaloriasquepodemsergastas: "Ideal para tonificar e alongar os músculos, promovendo um gasto calórico gradual e eficiente.",
//     alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//     locaisondepraticar: "Seu corpo, seu espaço. Realize seus exercícios em casa, no parque ou em um estúdio",
//     intensidade: "Adapte os movimentos ao seu ritmo e condicionamento físico, desde iniciantes até avançados.",
//     beneficios: "Melhora a postura, alivia dores, aumenta a flexibilidade, fortalece o core e proporciona bem-estar mental.",
//     musculostrabalhados: "Corpo inteiro, com foco em força e alongamento profundo.",
//     precaucoes: "Consulte um profissional antes de iniciar e evite realizar movimentos que causem dor."
//   },
//   {
//     titulo: "Treinamento Funcional",
//     descricao: "Quer se sentir mais preparado para o dia a dia? O Treinamento Funcional é perfeito para você! Nele, você realiza exercícios que imitam os movimentos que fazemos no nosso dia a dia, como agachar, levantar e empurrar. É uma forma divertida e eficiente de fortalecer os músculos e melhorar a coordenação.",
//     link: "https://pt.wikipedia.org/wiki/Treinamento_funcional",
//     porcentagemdecaloriasquepodemsergastas: "Combine força, resistência e coordenação em um único treino, queimando muitas calorias.",
//     alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//     locaisondepraticar: "Utilize espaços abertos, parques ou academias para realizar seus exercícios",
//     intensidade: "Adapte a intensidade e a complexidade dos exercícios ao seu nível de condicionamento físico",
//     beneficios: "Melhora a força, a resistência, a agilidade e a coordenação motora, preparando seu corpo para as atividades do dia a dia",
//     musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e estabilização do core",
//     precaucoes: "Consulte um profissional para garantir a execução correta dos exercícios e evitar lesões."
//   },
//   {
//     titulo: "Musculação",
//     descricao: "Para quem deseja ganhar massa muscular e definir o corpo, a musculação é a escolha certa! Com ela, você esculpe os músculos, aumenta a força e melhora a autoestima. Além disso, a musculação ajuda a fortalecer os ossos e prevenir lesões.",
//     link: "https://pt.wikipedia.org/wiki/Muscula%C3%A7%C3%A3o",
//     porcentagemdecaloriasquepodemsergastas: "Aumente sua massa muscular e acelere seu metabolismo, queimando mais calorias mesmo em repouso.",
//     alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//     locaisondepraticar: "Utilize equipamentos específicos para um treino completo e seguro.",
//     intensidade: "Adapte a carga e o número de repetições aos seus objetivos.",
//     beneficios: "Aumenta a força, define os músculos, melhora a autoestima e previne lesões.",
//     musculostrabalhados: "Todos os grupos musculares, de acordo com o treino escolhido.",
//     precaucoes: "Consulte um profissional para elaborar um treino personalizado e seguro."
//   },
//   {
//     titulo: "Aeróbico (Corrida na Esteira)",
//     descricao: "Uma atividade cardiovascular que melhora a resistência, queima calorias e tonifica os músculos das pernas. Ideal para quem busca perder peso e melhorar a saúde do coração.",
//     link: "https://pt.wikipedia.org/wiki/Corrida",
//     porcentagemdecaloriasquepodemsergastas: "Moderada a alta, dependendo da intensidade e duração.",
//     alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//     locaisondepraticar: "Academias, residências com esteira, parques (corrida ao ar livre).",
//     intensidade: "Variável, desde caminhadas leves até corridas de alta intensidade.",
//     beneficios: "Melhora a saúde cardiovascular, fortalece os músculos das pernas, auxilia na perda de peso, reduz o estresse, aumenta a resistência.",
//     musculostrabalhados: "Quadríceps, panturrilhas, glúteos, core.",
//     precaucoes: "Consultar um médico antes de iniciar, usar calçados adequados, prestar atenção aos sinais do corpo e evitar o overtraining."
// },
// {
//   titulo: "Crossfit",
//   descricao: "Um programa de treinamento de alta intensidade que combina exercícios variados, funcionais e constantemente variados. Desenvolve força, resistência, flexibilidade e agilidade.",
//   link: "https://pt.wikipedia.org/wiki/CrossFit",
//   porcentagemdecaloriasquepodemsergastas: "Muito alta, devido à alta intensidade e variedade de exercícios.",
//   alimentaçãorecomendada: "Equilibrada, com foco em macronutrientes (carboidratos, proteínas e gorduras) e micronutrientes, para atender às altas demandas energéticas dos treinos.",
//   locaisondepraticar: "Boxes de crossfit (academias especializadas).",
//   intensidade: "Muito alta, com exercícios que exigem força, resistência e explosão.",
//   beneficios: "Melhora a capacidade física geral, aumenta a força, desenvolve a resistência cardiovascular, melhora a coordenação motora, aumenta a densidade mineral óssea.",
//   musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e core.",
//   precaucoes: "Exige acompanhamento profissional para evitar lesões, iniciar gradualmente, respeitar os limites do corpo."
// },
// ];

// inputBusca.addEventListener('input', () => {
//     const termoBusca = inputBusca.value.toLowerCase();
//     sugestoesDiv.innerHTML = '';

//     const resultadosFiltrados = modalidades.filter(modalidade => {
//         return modalidade.titulo.toLowerCase().includes(termoBusca);
//     });

//     resultadosFiltrados.forEach(modalidade => {
//         const sugestao = document.createElement('div');
//         sugestao.textContent = modalidade.titulo;
//         sugestao.addEventListener('click', () => {
//             inputBusca.value = modalidade.titulo;
//             sugestoesDiv.innerHTML = ''; // Esconder as sugestões
//             // Chamar a função de pesquisa com o termo selecionado
//         });
//         sugestoesDiv.appendChild(sugestao);
//     });
// });

// $('.typeahead').typeahead ({
//     source: modalidades [
//         {
//         titulo: "Pilates",
//         descricao: "Ideal para quem busca um corpo mais forte, flexível e alinhado. Os movimentos precisos e controlados do Pilates trabalham todos os músculos, melhoram a postura e ainda ajudam a relaxar a mente. É como um abraço para o seu corpo!",
//         link: "https://pt.wikipedia.org/wiki/Pilates/",
//         porcentagemdecaloriasquepodemsergastas: "Ideal para tonificar e alongar os músculos, promovendo um gasto calórico gradual e eficiente.",
//         alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//         locaisondepraticar: "Seu corpo, seu espaço. Realize seus exercícios em casa, no parque ou em um estúdio",
//         intensidade: "Adapte os movimentos ao seu ritmo e condicionamento físico, desde iniciantes até avançados.",
//         beneficios: "Melhora a postura, alivia dores, aumenta a flexibilidade, fortalece o core e proporciona bem-estar mental.",
//         musculostrabalhados: "Corpo inteiro, com foco em força e alongamento profundo.",
//         precaucoes: "Consulte um profissional antes de iniciar e evite realizar movimentos que causem dor."
//       },
//       {
//         titulo: "Treinamento Funcional",
//         descricao: "Quer se sentir mais preparado para o dia a dia? O Treinamento Funcional é perfeito para você! Nele, você realiza exercícios que imitam os movimentos que fazemos no nosso dia a dia, como agachar, levantar e empurrar. É uma forma divertida e eficiente de fortalecer os músculos e melhorar a coordenação.",
//         link: "https://pt.wikipedia.org/wiki/Treinamento_funcional",
//         porcentagemdecaloriasquepodemsergastas: "Combine força, resistência e coordenação em um único treino, queimando muitas calorias.",
//         alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//         locaisondepraticar: "Utilize espaços abertos, parques ou academias para realizar seus exercícios",
//         intensidade: "Adapte a intensidade e a complexidade dos exercícios ao seu nível de condicionamento físico",
//         beneficios: "Melhora a força, a resistência, a agilidade e a coordenação motora, preparando seu corpo para as atividades do dia a dia",
//         musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e estabilização do core",
//         precaucoes: "Consulte um profissional para garantir a execução correta dos exercícios e evitar lesões."
//       },
//       {
//         titulo: "Musculação",
//         descricao: "Para quem deseja ganhar massa muscular e definir o corpo, a musculação é a escolha certa! Com ela, você esculpe os músculos, aumenta a força e melhora a autoestima. Além disso, a musculação ajuda a fortalecer os ossos e prevenir lesões.",
//         link: "https://pt.wikipedia.org/wiki/Muscula%C3%A7%C3%A3o",
//         porcentagemdecaloriasquepodemsergastas: "Aumente sua massa muscular e acelere seu metabolismo, queimando mais calorias mesmo em repouso.",
//         alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//         locaisondepraticar: "Utilize equipamentos específicos para um treino completo e seguro.",
//         intensidade: "Adapte a carga e o número de repetições aos seus objetivos.",
//         beneficios: "Aumenta a força, define os músculos, melhora a autoestima e previne lesões.",
//         musculostrabalhados: "Todos os grupos musculares, de acordo com o treino escolhido.",
//         precaucoes: "Consulte um profissional para elaborar um treino personalizado e seguro."
//       },
//       {
//         titulo: "Aeróbico (Corrida na Esteira)",
//         descricao: "Uma atividade cardiovascular que melhora a resistência, queima calorias e tonifica os músculos das pernas. Ideal para quem busca perder peso e melhorar a saúde do coração.",
//         link: "https://pt.wikipedia.org/wiki/Corrida",
//         porcentagemdecaloriasquepodemsergastas: "Moderada a alta, dependendo da intensidade e duração.",
//         alimentaçãorecomendada: "Rica em carboidratos complexos para fornecer energia e proteínas para a recuperação muscular.",
//         locaisondepraticar: "Academias, residências com esteira, parques (corrida ao ar livre).",
//         intensidade: "Variável, desde caminhadas leves até corridas de alta intensidade.",
//         beneficios: "Melhora a saúde cardiovascular, fortalece os músculos das pernas, auxilia na perda de peso, reduz o estresse, aumenta a resistência.",
//         musculostrabalhados: "Quadríceps, panturrilhas, glúteos, core.",
//         precaucoes: "Consultar um médico antes de iniciar, usar calçados adequados, prestar atenção aos sinais do corpo e evitar o overtraining."
//     },
//     {
//       titulo: "Crossfit",
//       descricao: "Um programa de treinamento de alta intensidade que combina exercícios variados, funcionais e constantemente variados. Desenvolve força, resistência, flexibilidade e agilidade.",
//       link: "https://pt.wikipedia.org/wiki/CrossFit",
//       porcentagemdecaloriasquepodemsergastas: "Muito alta, devido à alta intensidade e variedade de exercícios.",
//       alimentaçãorecomendada: "Equilibrada, com foco em macronutrientes (carboidratos, proteínas e gorduras) e micronutrientes, para atender às altas demandas energéticas dos treinos.",
//       locaisondepraticar: "Boxes de crossfit (academias especializadas).",
//       intensidade: "Muito alta, com exercícios que exigem força, resistência e explosão.",
//       beneficios: "Melhora a capacidade física geral, aumenta a força, desenvolve a resistência cardiovascular, melhora a coordenação motora, aumenta a densidade mineral óssea.",
//       musculostrabalhados: "Corpo inteiro, com foco em grandes grupos musculares e core.",
//       precaucoes: "Exige acompanhamento profissional para evitar lesões, iniciar gradualmente, respeitar os limites do corpo."
//     }]
// })
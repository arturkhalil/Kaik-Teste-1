document.addEventListener('DOMContentLoaded', function() {

    // Referências aos elementos do formulário que serão preenchidos
    const campoProcedimento = document.getElementById('procedimento');
    const campoDescricaoCirurgica = document.getElementById('descricaoCirurgica');
    const campoDiagPreOp = document.getElementById('diagPreOp');
    const campoDiagPosOp = document.getElementById('diagPosOp');

    const presetsCirurgicos = {
        "histerectomiaVaginal": {
            procedimento: "Histerectomia Vaginal",
            descricao: "1 - Paciente em posição ginecológica sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis;\n" +
                       "2 - Achados: Prolapso uterino e rotura perineal;\n" +
                       "3 - Realizado: Histerectomia Vaginal + Colpoperineoplastia anterior e posterior;\n" +
                       "4 - Revisão da hemostasia, síntese por planos, curativo;",
            diagPre: "Prolapso Uterino",
            diagPos: "O mesmo" // Ou um diagnóstico específico
        },
        "colecistectomiaVideo": {
            procedimento: "Colecistectomia Videolaparoscópica",
            descricao: "1. Paciente em DDH, sob anestesia geral, IOT.\n" +
                       "2. Realizada antissepsia e colocação de campos estéreis.\n" +
                       "3. Punção com agulha de Veress em cicatriz umbilical e realização de pneumoperitônio com CO2.\n" +
                       "4. Introdução de trocarte de 10mm em incisão umbilical, seguida de ótica de 30º.\n" +
                       "5. Sob visão direta, introduzidos mais 3 trocartes (10mm epigástrico, 5mm flanco D, 5mm hipocôndrio D).\n" +
                       "6. Identificação e dissecção do hilo vesicular, ligadura da artéria cística e ducto cístico com clipes metálicos.\n" +
                       "7. Colecistectomia retrógrada. Hemostasia revisada.\n" +
                       "8. Retirada da peça em endobag através do portal umbilical.\n" +
                       "9. Revisão da cavidade, esvaziamento do pneumoperitônio, síntese da aponeurose do portal umbilical e pele.\n" +
                       "10. Curativo oclusivo.",
            diagPre: "Colelitíase sintomática | Colecistite crônica calculosa",
            diagPos: "O mesmo"
        },
        "herniaInguinalE": {
            procedimento: "Hérnia Inguinal Esquerda (Técnica de Lichtenstein)",
            descricao: "1. Paciente em DDH, sob raquianestesia .\n" +
                       "2. Realizada antissepsia e colocação de campos estéreis.\n" +
                       "3. Incisão inguinal esquerda, diérese por planos até o saco herniário.\n" +
                       "4. Identificação, dissecção e tratamento do saco herniário.\n" +
                       "5. Reforço da parede posterior com tela de polipropileno (Técnica de Lichtenstein).\n" +
                       "6. Hemostasia revisada. Contagem de compressas. Síntese por planos. Curativo oclusivo.\n",
            diagPre: "Hérnia inguinal esquerda",
            diagPos: "Hérnia inguinal esquerda corrigida"
        }
        ,
    "herniaInguinalD": {
        procedimento: "Hernoplastia Inguinal Direita (Técnica de Lichtenstein)",
        descricao: "1. Paciente em DDH, sob raquianestesia.\n" +
                   "2. Realizada antissepsia e colocação de campos estéreis.\n" +
                   "3. Incisão inguinal direita, diérese por planos até o saco herniário.\n" +
                   "4. Identificação, dissecção e tratamento do saco herniário.\n" +
                   "5. Reforço da parede posterior com tela de polipropileno (Técnica de Lichtenstein).\n" +
                   "6. Hemostasia revisada. Contagem de compressas. Síntese por planos. Curativo oclusivo.",
        diagPre: "Hérnia inguinal direita",
        diagPos: "Hérnia inguinal direita corrigida"
    }
    ,
    "histerectomiaAdenomiose":{
        procedimento: "Histerectomia Total Abdominal",
        descricao: "1 – Paciente em decúbito dorsal sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Utero aumentado de volume as custas de adenomiose.\n"+
"3 – Realizado: Histerectomia Total Abdominal.\n" +
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;",
diagPre: "Adenomiose",
diagPos: "O mesmo"
    }
    ,
"postectomia": {
            procedimento: "Postectomia",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Fimose.\n"+
"3 – Realizado: Postectomia.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Fimose",
            diagPos: "O mesmo"
        }
        ,
        "histerectomiaMiomatose": {
            procedimento: "Histerectomia Total Abdominal",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Útero aumento às custas de miomatose uterina.\n"+
"3 – Realizado: Histerectomia Total Abdominal .\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Miomatose Uterina",
            diagPos: "O mesmo"
        }
        ,
        "hidrocele": {
            procedimento: "Correção de hidrocele",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Hidrocele de grande volume.\n"+
"3 – Realizado: Incisão Mediana em bolsa escrotal.\n"+ "Aspiração de líquido em bolsa excrotal.\n"+ "Exérese do excesso de túnica vaginal.\n"+"Eversão da túnica vaginal+ Fixação do tésticulo em dois pontos de fixação+Colação de dreno de pen rose.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Hidrocele",
            diagPos: "O mesmo"
        }
        ,
        "herniaEpigastrica": {
            procedimento: "Hernioplastia Epigástrica",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Hérnia Epigástrica.\n"+
"3 – Realizado: Herniorrafia epigástrica com prolene 0-0, com colação de tela de polipropileno .\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Hérnia Epigástrica",
            diagPos: "O mesmo"
        }
        ,
        "colecistectomiaConvencional": {
            procedimento: "Colecistectomia Convencional",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis, realização de incisão subcostal direita.\n"+
"2 – Achados: Vesícula biliar tópica, com cálculos, paredes finas e pedículo de fácil manuseio.\n"+
"3 – Realizado: Exérese de vesícula + Cálculos biliares.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Colelitíase",
            diagPos: "O mesmo",
        }
        ,
        "varicocele": {
            procedimento: "Correção de Varicocele",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Varicocele.\n"+
"3 – Realizado: Incisão inguinal, abertura do canal inguinal, identificação da varicocele, correção de varicocele por ligadura do plexo pmapiniforme.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Varicocele",
            diagPos: "O mesmo",
        }
        ,
        "herniaInguinalBilateral": {
            procedimento: "Hernioplastia Inguinal Bilateral",
            descricao: "1 – Paciente decubito dorsal horizontal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Hérnia Inguinal Bilateral.\n"+
"3 – Realizado: Inguinotomia esquerda e direita, com diérese por planos + hernioplastia inguinal com colocação de tela de polipropileno segundo a técnica de Linchtenstein.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Colelitíase",
            diagPos: "O mesmo",
        }
        ,
        "colpoperineoplastia": {
            procedimento: "Colpoperineoplastia",
            descricao: "1 – Paciente em posição ginecológica, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Cistocele grau III, retocele e rotura perineal.\n"+
"3 – Realizado: Colpoperineoplatia anterior e posterior.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Cistocele + Retocele",
            diagPos: "O mesmo",
        }
        ,
        "herniaUmbilical": {
            procedimento: "Hernioplastia Umbilical",
            descricao: "1 – Paciente em decúbito dorsal, sob raquianestesia, assepsia e antissepsia, colocação de campos estéreis.\n"+
"2 – Achados: Hernia Umbilical.\n"+
"3 – Realizado: Hernioplastia umbilical.\n"+
"4 – Revisão da hemostasia, contagem de compressas, síntese por planos, curativo;"
,
            diagPre: "Hernia Umbilical",
            diagPos: "O mesmo",
        }
    };

    // Seleciona todos os botões de procedimento
    const botoesProcedimento = document.querySelectorAll('.btn-proc');

    // Adiciona um event listener para cada botão
    botoesProcedimento.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const tipoProcedimento = botao.dataset.proc; // Pega o valor de 'data-proc'
            const preset = presetsCirurgicos[tipoProcedimento];

            if (preset) {
                campoProcedimento.value = preset.procedimento || "";
                campoDescricaoCirurgica.value = preset.descricao || "";
                campoDiagPreOp.value = preset.diagPre || "";
                campoDiagPosOp.value = preset.diagPos || "";
            } else {
                // Limpa os campos se não houver preset definido (ou pode manter os valores anteriores)
                campoProcedimento.value = botao.textContent; // Preenche ao menos o nome do procedimento
                campoDescricaoCirurgica.value = "Descrição para " + botao.textContent + " ainda não definida.";
                campoDiagPreOp.value = "";
                campoDiagPosOp.value = "";
                console.warn("Preset não encontrado para:", tipoProcedimento);
            }
        });
});

        const btnImprimir = document.getElementById('btnImprimirDescricao');
if (btnImprimir) {
    btnImprimir.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'p', // p para portrait (retrato), l para landscape (paisagem)
            unit: 'mm',       // unidade de medida
            format: 'a4'      // formato da página
        });

        // --- Configurações Iniciais ---
        const margemEsquerdaPagina = 15; // Aumentei as margens da página
        const margemSuperiorPagina = 15;
        const larguraConteudoUtil = doc.internal.pageSize.getWidth() - (2 * margemEsquerdaPagina);
        let yPos = margemSuperiorPagina;
        const alturaLinhaPadrao = 7;       // <--- CORRIGIDO/ADICIONADO NOME CORRETO
        const alturaLinhaCampos = 8;
        const espessuraBordaPrincipal = 0.5;
        const espessuraBordaInterna = 0.2;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);

        // --- 1. Logo e Cabeçalho Principal ---
        // SUBSTITUA 'logoSantaCasaDataURL' PELA STRING BASE64 DA SUA IMAGEM DO LOGO
        const logoSantaCasaDataURL = 'data:image/png;base64,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'; // Ex: 'data:image/png;base64,iVBORw0KGgo...'
        const larguraLogo = 15; // mm - ajuste
        const alturaLogo = 15;  // mm - ajuste

        try {
            if (logoSantaCasaDataURL && logoSantaCasaDataURL !== 'data:image/png;base64,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') {
                 doc.addImage(logoSantaCasaDataURL, 'PNG', margemEsquerdaPagina, yPos, larguraLogo, alturaLogo);
            } else {
                console.warn("Logo DataURL não fornecido. Pulando adição do logo.");
            }
        } catch (e) {
            console.error("Erro ao adicionar logo:", e);
        }
        
        const yPosTitulo = yPos + (alturaLogo / 2); // Centraliza o título com o logo (aproximadamente)
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("SANTA CASA DE MISERICÓRDIA DE PARNAÍBA", doc.internal.pageSize.getWidth() / 2, yPosTitulo, { align: 'center' });
        yPos += Math.max(alturaLogo, alturaLinhaPadrao * 1.5) + 5; // Espaço após o cabeçalho

        // --- Borda Principal Externa (será desenhada no final) ---
        const yInicioConteudoComBorda = yPos;

        // --- Coleta de Dados (como antes, certifique-se que os IDs HTML estão corretos) ---
        const nomePaciente = document.getElementById('paciente')?.value.trim() || " ";
        const operador = document.getElementById('cirurgiao')?.value.trim() || " ";
        const assistente = document.getElementById('assistente')?.value.trim() || " ";
        const instrumentador = document.getElementById('instrumentador')?.value.trim() || " ";
        const anestesista = document.getElementById('anestesista')?.value.trim() || " ";

        const dataOperacaoEl = document.getElementById('dataOperacao');
        let dataOperacao = " ";
        if (dataOperacaoEl && dataOperacaoEl.value) {
            const [year, month, day] = dataOperacaoEl.value.split('-');
            dataOperacao = `${day}/${month}/${year}`;
        }

        const diagPreOp = document.getElementById('diagPreOp')?.value.trim() || " ";
        const operacaoTipo = document.getElementById('procedimento')?.value.trim() || " ";
        let diagPosOpValor = document.getElementById('diagPosOp')?.value.trim() || " ";
        const diagPosOpMesmoCheckbox = document.getElementById('diagPosOpMesmo');
        if (diagPosOpMesmoCheckbox && diagPosOpMesmoCheckbox.checked) {
            diagPosOpValor = "O mesmo";
        }
        const intercorrenciasEl = document.getElementById('intercorrencias');
        const intercorrencias = intercorrenciasEl ? intercorrenciasEl.value.trim() : "Sem intercorrências";
        const descricaoCirurgica = document.getElementById('descricaoCirurgica')?.value.trim() || " ";

        // --- Funções Auxiliares para desenhar campos ---
        // xLabel, yLinha, alturaLinha, textoLabel, valor, xValor, larguraValor, [opcoesTextoValor]
        function desenharLinhaCampoSimples(xLabel, yLinha, alturaLinha, textoLabel, valor, xValor, larguraValor, opcoesTextoValor = {}) {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.text(textoLabel, xLabel, yLinha + alturaLinha * 0.65);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.rect(xValor, yLinha, larguraValor, alturaLinha); // Caixa do valor
            doc.text(valor, xValor + 2, yLinha + alturaLinha * 0.65, { maxWidth: larguraValor - 4, ...opcoesTextoValor });
        }
        
        // --- Layout dos Campos ---
        const xLabelGlobal = margemEsquerdaPagina + 1;
        const xValorGlobal = xLabelGlobal + 20; // Posição X inicial para a caixa de valor do campo NOME
        const larguraValorGlobal = larguraConteudoUtil - (xValorGlobal - margemEsquerdaPagina) -1; // Largura da caixa de valor para campos de largura total

        // NOME
        desenharLinhaCampoSimples(xLabelGlobal, yPos, alturaLinhaCampos, "NOME:", nomePaciente, xValorGlobal, larguraValorGlobal);
        yPos += alturaLinhaCampos;

        // Bloco OPERADOR, ASSISTENTE, INSTRUMENTADOR, ANESTESISTA, DATA
        const xLabelCol1 = xLabelGlobal;
        const larguraLabelCol1 = 35; // Largura para "OPERADOR:", "INSTRUMENTADOR(A):", "DATA DA OPERAÇÃO:"
        const xValorCol1 = xLabelCol1 + larguraLabelCol1;
        const larguraTotalColunas = larguraConteudoUtil -1; // Largura total para as duas colunas de campos de valor + linha divisória
        const larguraValorCol = (larguraTotalColunas / 2) - 1; // Largura para cada caixa de valor nas colunas, -1 para linha divisória

        const xLabelCol2 = xLabelCol1 + larguraLabelCol1 + larguraValorCol + 2; // +2 para linha divisória e pequeno espaço
        const larguraLabelCol2 = 28; // Largura para "ASSISTENTE:", "ANESTESISTA:"
        const xValorCol2 = xLabelCol2 + larguraLabelCol2;
        
        // Linha 1 do Bloco (OPERADOR | ASSISTENTE)
        desenharLinhaCampoSimples(xLabelCol1, yPos, alturaLinhaCampos, "OPERADOR:", operador, xValorCol1, larguraValorCol);
        desenharLinhaCampoSimples(xLabelCol2, yPos, alturaLinhaCampos, "ASSISTENTE:", assistente, xValorCol2, larguraValorCol);
        doc.setLineWidth(espessuraBordaInterna);
        doc.line(xValorCol1 + larguraValorCol + 0.5, yPos, xValorCol1 + larguraValorCol + 0.5, yPos + alturaLinhaCampos * 3); // Linha vertical divisória para 3 linhas
        yPos += alturaLinhaCampos;

        // Linha 2 do Bloco (INSTRUMENTADOR(A) | ANESTESISTA)
        desenharLinhaCampoSimples(xLabelCol1, yPos, alturaLinhaCampos, "INSTRUMENTADOR(A):", instrumentador, xValorCol1, larguraValorCol);
        desenharLinhaCampoSimples(xLabelCol2, yPos, alturaLinhaCampos, "ANESTESISTA:", anestesista, xValorCol2, larguraValorCol);
        yPos += alturaLinhaCampos;
        
        // Linha 3 do Bloco (DATA DA OPERAÇÃO) - ocupa a largura das duas colunas de valor
        desenharLinhaCampoSimples(xLabelCol1, yPos, alturaLinhaCampos, "DATA DA OPERAÇÃO:", dataOperacao, xValorCol1, larguraTotalColunas - larguraLabelCol1 +1);
        yPos += alturaLinhaCampos;

        // DIAGNÓSTICO PRÉ-OPERATÓRIO
        desenharLinhaCampoSimples(xLabelGlobal, yPos, alturaLinhaCampos, "DIAGNÓSTICO PRÉ-OPERATÓRIO:", diagPreOp, xLabelGlobal + 68, larguraConteudoUtil - 68 -1);
        yPos += alturaLinhaCampos;
        
        // OPERAÇÃO TIPO
        desenharLinhaCampoSimples(xLabelGlobal, yPos, alturaLinhaCampos, "OPERAÇÃO TIPO:", operacaoTipo, xLabelGlobal + 40, larguraConteudoUtil - 40 -1);
        yPos += alturaLinhaCampos;

        // DIAGNÓSTICO PÓS-OPERATÓRIO
        desenharLinhaCampoSimples(xLabelGlobal, yPos, alturaLinhaCampos, "DIAGNÓSTICO PÓS-OPERATÓRIO:", diagPosOpValor, xLabelGlobal + 70, larguraConteudoUtil - 70 -1);
        yPos += alturaLinhaCampos;

        // Linhas em branco (3 linhas)
        for (let i = 0; i < 3; i++) {
            doc.setLineWidth(espessuraBordaInterna);
            doc.rect(margemEsquerdaPagina, yPos, larguraConteudoUtil, alturaLinhaCampos);
            yPos += alturaLinhaCampos;
        }
        
        // INTERCORRÊNCIAS DURANTE A OPERAÇÃO
        desenharLinhaCampoSimples(xLabelGlobal, yPos, alturaLinhaCampos, "INTERCORRÊNCIAS DURANTE A OPERAÇÃO:", intercorrencias, xLabelGlobal + 93, larguraConteudoUtil - 93 -1);
        yPos += alturaLinhaCampos;

        // DESCRIÇÃO CIRÚRGICA
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.text("DESCRIÇÃO CIRÚRGICA:", margemEsquerdaPagina, yPos + alturaLinhaCampos * 0.65);
        doc.setLineWidth(espessuraBordaInterna);
        doc.rect(margemEsquerdaPagina, yPos, larguraConteudoUtil, alturaLinhaCampos); // Borda apenas para o título da seção
        yPos += alturaLinhaCampos;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        const alturaDescricaoCaixa = 60; // Altura fixa para a caixa de descrição, ajuste conforme necessário
        doc.rect(margemEsquerdaPagina, yPos, larguraConteudoUtil, alturaDescricaoCaixa);
        const linhasDescricao = doc.splitTextToSize(descricaoCirurgica, larguraConteudoUtil - 4); // -4 para padding interno
        doc.text(linhasDescricao, margemEsquerdaPagina + 2, yPos + 4); // +2 e +4 para padding
        yPos += alturaDescricaoCaixa;

        // --- Desenha a Borda Principal Externa (Final) ---
        doc.setLineWidth(espessuraBordaPrincipal);
        doc.rect(margemEsquerdaPagina, yInicioConteudoComBorda, larguraConteudoUtil, yPos - yInicioConteudoComBorda);

        // --- Abrir diálogo de impressão para o PDF ---
        try {
            const pdfBlob = doc.output('blob'); // Gera o PDF como um Blob
            const pdfUrl = URL.createObjectURL(pdfBlob);

            // Cria um iframe temporário e invisível
            const iframe = document.createElement('iframe');
            iframe.style.position = 'absolute';
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.border = '0';
            iframe.style.visibility = 'hidden'; // Garante que não seja visível

            iframe.onload = function() {
                console.log("Iframe carregado com o PDF.");
                try {
                    // Foca no iframe e chama a função de impressão da janela do iframe
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();
                    console.log("Diálogo de impressão solicitado.");
                } catch (e) {
                    console.error("Erro ao tentar imprimir o iframe:", e);
                    alert("Erro ao tentar abrir o diálogo de impressão. Verifique o console do navegador.");
                } finally {
                    // Limpeza: remove o iframe após um tempo (a impressão é assíncrona)
                    // e revoga o URL do Blob para liberar memória.
                    // Não há um evento confiável para saber quando o diálogo de impressão foi fechado ou a impressão concluída.
                    setTimeout(() => {
                        document.body.removeChild(iframe);
                        URL.revokeObjectURL(pdfUrl);
                        console.log("Iframe e Blob URL limpos.");
                    }, 2000); // Espera 2 segundos antes de limpar, ajuste se necessário
                }
            };

            iframe.onerror = function() {
                console.error("Erro ao carregar o PDF no iframe.");
                alert("Não foi possível carregar o PDF para impressão.");
                document.body.removeChild(iframe);
                URL.revokeObjectURL(pdfUrl);
            };
            
            document.body.appendChild(iframe); // Adiciona o iframe ao corpo do documento
            iframe.src = pdfUrl; // Define a origem do iframe para o PDF

        } catch (error) {
            console.error("Erro ao gerar ou preparar PDF para impressão:", error);
            alert("Ocorreu um erro ao gerar o PDF para impressão.");
        }

        // O alert abaixo pode não ser ideal aqui, pois a impressão é uma ação separada.
        // alert("Preparando PDF para impressão..."); // Removido ou alterado
    });
}
});


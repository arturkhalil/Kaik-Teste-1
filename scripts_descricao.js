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
        const logoSantaCasaDataURL = 'C:\Users\artur\Documents\GitHub\Kaik-Teste-1\imagens\logo-santacasa.png'; // Ex: 'data:image/png;base64,iVBORw0KGgo...'
        const larguraLogo = 15; // mm - ajuste
        const alturaLogo = 15;  // mm - ajuste

        try {
            if (logoSantaCasaDataURL && logoSantaCasaDataURL !== 'COLE_A_STRING_BASE64_DO_SEU_LOGO_AQUI') {
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


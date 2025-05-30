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

    // Funcionalidade do botão Imprimir (exemplo básico)
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
        const margemEsquerda = 10;
        const margemSuperior = 10;
        const larguraConteudoUtil = doc.internal.pageSize.getWidth() - (2 * margemEsquerda);
        let yPos = margemSuperior;
        const alturaLinhaPadrao = 7; // mm, ajuste conforme necessário
        const alturaLinhaCamposComBorda = 8; // Altura para as caixas de texto dos campos

        doc.setFont("helvetica", "normal"); // Fonte padrão
        doc.setFontSize(10); // Tamanho de fonte padrão para o corpo

        // --- 1. Logo e Cabeçalho Principal ---
        // ADICIONAR LOGO AQUI SE VOCÊ TIVER A IMAGEM
        // Exemplo:
        // try {
        //     // Supondo que 'logoSantaCasaDataURL' seja uma string base64 da sua imagem
        //     // doc.addImage(logoSantaCasaDataURL, 'PNG', margemEsquerda, yPos, 20, 20); // x, y, largura, altura
        //     // yPos += 25; // Ajusta yPos após o logo
        // } catch (e) { console.error("Erro ao adicionar logo:", e); }

        // Se não houver logo, ajuste o yPos inicial ou o espaço abaixo
        yPos += 5; // Espaço inicial, ajuste se adicionar logo

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("SANTA CASA DE MISERICÓRDIA DE PARNAÍBA", doc.internal.pageSize.getWidth() / 2, yPos, { align: 'center' });
        yPos += alturaLinhaPadrao * 1.5; // Aumenta o espaço depois do título

        // --- Linha abaixo do cabeçalho principal ---
        doc.setLineWidth(0.5);
        doc.line(margemEsquerda, yPos, margemEsquerda + larguraConteudoUtil, yPos);
        yPos += alturaLinhaPadrao * 0.5;


        // --- Coleta de Dados (Verifique se os IDs dos campos HTML estão corretos) ---
        const nomePaciente = document.getElementById('paciente')?.value || " ";
        const operador = document.getElementById('cirurgiao')?.value || " ";
        const assistente = document.getElementById('assistente')?.value || " ";
        const instrumentador = document.getElementById('instrumentador')?.value || " ";
        const anestesista = document.getElementById('anestesista')?.value || " ";

        // Para DATA DA OPERAÇÃO e INTERCORRÊNCIAS, você precisa ter esses campos no seu HTML
        // ou definir valores padrão aqui.
        const dataOperacaoEl = document.getElementById('dataOperacao'); // Supondo que você criou este campo
        let dataOperacao = dataOperacaoEl ? dataOperacaoEl.value : new Date().toLocaleDateString('pt-BR');
        if (dataOperacaoEl && dataOperacaoEl.type === 'date' && dataOperacaoEl.value) { // Formata data se for do tipo date
             const [year, month, day] = dataOperacaoEl.value.split('-');
             dataOperacao = `${day}/${month}/${year}`;
        }


        const diagPreOp = document.getElementById('diagPreOp')?.value || " ";
        const operacaoTipo = document.getElementById('procedimento')?.value || " ";

        let diagPosOpValor = document.getElementById('diagPosOp')?.value || " ";
        const diagPosOpMesmoCheckbox = document.getElementById('diagPosOpMesmo'); // Supondo que você criou este checkbox
        if (diagPosOpMesmoCheckbox && diagPosOpMesmoCheckbox.checked) {
            diagPosOpValor = "O mesmo";
        }

        const intercorrenciasEl = document.getElementById('intercorrencias'); // Supondo que você criou este campo
        const intercorrencias = intercorrenciasEl ? intercorrenciasEl.value : "Sem intercorrências";

        const descricaoCirurgica = document.getElementById('descricaoCirurgica')?.value || " ";


        // --- Funções Auxiliares para desenhar campos com borda ---
        function desenharCampoComBorda(label, valor, x, y, larguraLabel, larguraValor, altura) {
            doc.setFontSize(9); // Tamanho menor para labels
            doc.setFont("helvetica", "bold");
            doc.text(label, x, y + altura / 1.6); // Ajuste vertical do label

            doc.setFontSize(10); // Tamanho para o valor
            doc.setFont("helvetica", "normal");
            doc.rect(x + larguraLabel -1 , y, larguraValor + 1, altura); // Caixa do valor
            doc.text(valor, x + larguraLabel + 1, y + altura / 1.6, { maxWidth: larguraValor - 3 }); // +1 padding, -3 maxWidth
            doc.setLineWidth(0.2); // Linha fina para bordas internas
            doc.rect(x-1, y, larguraLabel + larguraValor, altura); // Borda externa da linha inteira do campo
        }

        function desenharSecaoComBorda(label, valor, x, y, larguraTotal, alturaLabel, alturaValorMinima) {
            doc.setFontSize(9);
            doc.setFont("helvetica", "bold");
            doc.text(label, x, y + alturaLabel / 1.6);
            doc.setLineWidth(0.2);
            doc.rect(x-1, y, larguraTotal+1, alturaLabel); // Borda do label

            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            
            const linhasTexto = doc.splitTextToSize(valor, larguraTotal - 2); // -2 para padding
            const alturaCalculadaValor = Math.max(alturaValorMinima, linhasTexto.length * (alturaLinhaPadrao * 0.7)); // Calcula altura necessária
            
            doc.rect(x-1, y + alturaLabel, larguraTotal+1, alturaCalculadaValor); // Caixa da descrição abaixo do label
            doc.text(linhasTexto, x + 1, y + alturaLabel + 4); // +1 padding esquerdo, +4 padding superior

            return alturaLabel + alturaCalculadaValor; // Retorna a altura total da seção
        }

        // --- Layout dos Campos ---
        const xInicial = margemEsquerda + 1; // Pequena margem interna
        const larguraTotalDisponivel = larguraConteudoUtil - 2; // Desconta margens internas

        doc.setFontSize(10); // Reset para tamanho padrão do texto dos campos

        // NOME
        desenharCampoComBorda("NOME:", nomePaciente, xInicial, yPos, 20, larguraTotalDisponivel - 20, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // OPERADOR | ASSISTENTE
        const larguraLabelOperador = 25;
        const larguraLabelAssistente = 28;
        const espacoEntreColunas = 3;
        const larguraValorMetade = (larguraTotalDisponivel - larguraLabelOperador - larguraLabelAssistente - espacoEntreColunas) / 2;
        
        desenharCampoComBorda("OPERADOR:", operador, xInicial, yPos, larguraLabelOperador, larguraValorMetade, alturaLinhaCamposComBorda);
        desenharCampoComBorda("ASSISTENTE:", assistente, xInicial + larguraLabelOperador + larguraValorMetade + espacoEntreColunas, yPos, larguraLabelAssistente, larguraValorMetade, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // INSTRUMENTADOR(A) | ANESTESISTA
        const larguraLabelInstrumentador = 40;
        const larguraLabelAnestesista = 30;
        // Reutilizando larguraValorMetade, assumindo que os labels têm larguras diferentes mas os campos de valor podem ser iguais
        desenharCampoComBorda("INSTRUMENTADOR(A):", instrumentador, xInicial, yPos, larguraLabelInstrumentador, larguraValorMetade, alturaLinhaCamposComBorda);
        desenharCampoComBorda("ANESTESISTA:", anestesista, xInicial + larguraLabelInstrumentador + larguraValorMetade + espacoEntreColunas, yPos, larguraLabelAnestesista, larguraValorMetade, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;
        
        // DATA DA OPERAÇÃO
        desenharCampoComBorda("DATA DA OPERAÇÃO:", dataOperacao, xInicial, yPos, 45, larguraTotalDisponivel - 45, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // DIAGNÓSTICO PRÉ-OPERATÓRIO
        desenharCampoComBorda("DIAGNÓSTICO PRÉ-OPERATÓRIO:", diagPreOp, xInicial, yPos, 70, larguraTotalDisponivel - 70, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // OPERAÇÃO TIPO
        desenharCampoComBorda("OPERAÇÃO TIPO:", operacaoTipo, xInicial, yPos, 40, larguraTotalDisponivel - 40, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // DIAGNÓSTICO PÓS-OPERATÓRIO
        desenharCampoComBorda("DIAGNÓSTICO PÓS-OPERATÓRIO:", diagPosOpValor, xInicial, yPos, 72, larguraTotalDisponivel - 72, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;

        // Linhas em branco com borda (exemplo para 3 linhas, como no PDF de exemplo)
        // Essas linhas parecem ter apenas a borda externa da linha, sem label.
        doc.setLineWidth(0.2);
        doc.rect(xInicial -1, yPos, larguraTotalDisponivel +1, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;
        doc.rect(xInicial -1, yPos, larguraTotalDisponivel +1, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;
        doc.rect(xInicial -1, yPos, larguraTotalDisponivel +1, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;
        
        // INTERCORRÊNCIAS DURANTE A OPERAÇÃO
        // Esta seção no PDF de exemplo é uma linha única com label e valor.
        desenharCampoComBorda("INTERCORRÊNCIAS DURANTE A OPERAÇÃO:", intercorrencias, xInicial, yPos, 95, larguraTotalDisponivel - 95, alturaLinhaCamposComBorda);
        yPos += alturaLinhaCamposComBorda;
        
        // DESCRIÇÃO CIRÚRGICA
        // Esta seção no PDF de exemplo tem um label e uma caixa maior para o texto.
        const alturaLabelDesc = alturaLinhaPadrao * 0.8; // Altura para o label "DESCRIÇÃO CIRÚRGICA:"
        const alturaMinimaValorDesc = 40; // Altura mínima para a caixa de descrição
        const alturaTotalDescricao = desenharSecaoComBorda("DESCRIÇÃO CIRÚRGICA:", descricaoCirurgica, xInicial, yPos, larguraTotalDisponivel, alturaLabelDesc, alturaMinimaValorDesc);
        yPos += alturaTotalDescricao + (alturaLinhaPadrao * 0.5); // Espaço após a descrição

        // --- Linha no final do documento ---
        doc.setLineWidth(0.5);
        doc.line(margemEsquerda, yPos, margemEsquerda + larguraConteudoUtil, yPos);

        // --- Salvar o PDF ---
        // Usando template literal corretamente para o nome do arquivo
        doc.save(`descricao_cirurgica_${(nomePaciente || "paciente").trim().replace(/\s+/g, '_')}.pdf`);
        alert("Documento PDF gerado e pronto para download!");

    });
}
});

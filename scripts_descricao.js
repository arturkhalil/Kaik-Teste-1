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
            console.log("Botão 'Imprimir Descrição' CLICADO - Iniciando versão simplificada do PDF.");

            if (!window.jspdf) {
                alert("ERRO CRÍTICO: A biblioteca jsPDF não está carregada na página. Verifique o <script> no HTML.");
                console.error("window.jspdf é undefined. A biblioteca jsPDF precisa ser incluída no HTML.");
                return;
            }
            console.log("Biblioteca jsPDF encontrada:", window.jspdf);

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4'
            });
            console.log("Nova instância jsPDF 'doc' criada.");

            // --- Coleta de Dados MÍNIMA para teste ---
            let nomePaciente = "Paciente Padrão";
            try {
                nomePaciente = document.getElementById('paciente')?.value.trim() || "Paciente Padrão Teste";
            } catch(e) { console.error("Erro ao obter nome do paciente:", e); }

            let operacaoTipo = "Procedimento Padrão";
            try {
                operacaoTipo = document.getElementById('procedimento')?.value.trim() || "Procedimento Padrão Teste";
            } catch(e) { console.error("Erro ao obter tipo de operação:", e); }
            
            console.log("Dados para PDF de teste:", { nomePaciente, operacaoTipo });

            // --- Desenho EXTREMAMENTE SIMPLES no PDF ---
            try {
                doc.setFontSize(18);
                doc.setFont("helvetica", "bold");
                doc.text("RELATÓRIO DE TESTE", 105, 20, { align: 'center' });

                doc.setFontSize(12);
                doc.setFont("helvetica", "normal");
                let y = 40; // Posição Y inicial para o texto

                doc.text(`Paciente: ${nomePaciente}`, 20, y);
                y += 10;
                doc.text(`Procedimento: ${operacaoTipo}`, 20, y);
                y += 10;
                doc.text("Este é um teste para verificar se o PDF é gerado e impresso.", 20, y);
                
                console.log("Conteúdo de teste desenhado no objeto 'doc'.");
            } catch (e) {
                console.error("Erro CRÍTICO ao tentar desenhar conteúdo de teste no PDF:", e);
                alert("Um erro ocorreu ao tentar desenhar o conteúdo do PDF. Verifique o console.");
                return; // Interrompe se não conseguir desenhar o básico
            }

            // --- Lógica para abrir diálogo de impressão (mantida) ---
            try {
                const pdfBlob = doc.output('blob');
                const pdfUrl = URL.createObjectURL(pdfBlob);
                console.log("PDF de teste (blob) criado, URL:", pdfUrl);

                const iframe = document.createElement('iframe');
                iframe.style.position = 'absolute';
                iframe.style.width = '0';
                iframe.style.height = '0';
                iframe.style.border = '0';
                iframe.style.visibility = 'hidden';

                iframe.onload = function() {
                    console.log("Iframe carregado com o PDF de teste.");
                    try {
                        iframe.contentWindow.focus();
                        iframe.contentWindow.print();
                        console.log("Diálogo de impressão solicitado para o PDF de teste.");
                    } catch (e_print) {
                        console.error("Erro ao tentar imprimir o iframe com PDF de teste:", e_print);
                        alert("Erro ao tentar abrir o diálogo de impressão. Verifique o console.");
                    } finally {
                        setTimeout(() => {
                            if (document.body.contains(iframe)) {
                               document.body.removeChild(iframe);
                            }
                            URL.revokeObjectURL(pdfUrl);
                            console.log("Iframe de teste e Blob URL limpos.");
                        }, 3000); 
                    }
                };
                iframe.onerror = function() {
                    console.error("Erro ao carregar o PDF de teste no iframe.");
                    alert("Não foi possível carregar o PDF de teste para impressão.");
                    if (document.body.contains(iframe)) {
                        document.body.removeChild(iframe);
                    }
                    URL.revokeObjectURL(pdfUrl);
                };
                
                document.body.appendChild(iframe);
                iframe.src = pdfUrl;

            } catch (error_blob) {
                console.error("Erro ao gerar blob do PDF ou preparar para impressão:", error_blob);
                alert("Ocorreu um erro ao gerar o PDF (blob) ou preparar para impressão.");
            }
        }); // Fecha o addEventListener do btnImprimir
    } else {
        console.error("Botão 'btnImprimirDescricao' NÃO FOI ENCONTRADO no HTML! Verifique o ID.");
    }
   
});


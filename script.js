document.addEventListener('DOMContentLoaded', function() {
    // Este evento garante que o script só rode depois que todo o HTML foi carregado

    const btnPrescricao = document.getElementById('btnPrescricao');
    const btnDescricaoCirurgica = document.getElementById('btnDescricaoCirurgica');

    if (btnPrescricao) {
        btnPrescricao.addEventListener('click', function() {
            alert('Botão "Prescrição Médica" clicado!');
            // Aqui você pode adicionar a lógica para:
            // - Redirecionar para outra página: window.location.href = 'prescricao.html';
            // - Mostrar/esconder outras seções da página
            // - Carregar dados, etc.
            console.log('Ação de Prescrição Médica iniciada.');
        });
    }

    if (btnDescricaoCirurgica) {
        btnDescricaoCirurgica.addEventListener('click', function() {
                   // alert('Botão "Descrição Cirúrgica" clicado!'); // Mantenha para teste se quiser
        console.log('Redirecionando para a tela de descrição cirúrgica.');
        window.location.href = 'descricao-cirurgica.html'; // <-- Alteração aqui
    });
}
});
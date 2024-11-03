// declaração da variavel checkbox para receber o evento 'clique'
const chk = document.getElementById('chk')
//configuração do evento clique para mudar tema de claro p/ dark
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})
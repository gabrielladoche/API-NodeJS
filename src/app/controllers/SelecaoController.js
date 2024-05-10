import conexao from '../database/conexao.js'

class SelecaoController{

        index(request, response){
            const sql = "select * from selecoes"
            conexao.query(sql, (erro, resultado) =>{
                if (erro){
                    res.status(404).json({'erro': erro})
                }else{
                    response.status(200).json(resultado)
                }
            })
        }

        store(req, res) {
            const selecao = req.body;
            const selecaoNome = selecao.selecao; 
            const selecaoGrupo = selecao.grupo; 
            const sql = "INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2)";
            const values = [selecaoNome, selecaoGrupo]; 
        
        
        
            conexao.query(sql, values, (erro, resultado) => {
                if (erro) {
                    console.error('Erro ao executar a consulta:', erro);
                    res.status(404).json({'erro': erro});
                } else {
                    res.status(201).json({'mensagem': 'Registro inserido com sucesso'});
                }
            });
        }

        update (req, res) {
    const id = req.params.id;
    const dadosAtualizados = req.body;

   
    const sql = "UPDATE selecoes SET selecao = $1, grupo = $2 WHERE id = $3";
    const values = [dadosAtualizados.selecao, dadosAtualizados.grupo, id];

    
    conexao.query(sql, values, (erro, resultado) => {
        if (erro) {
            console.error('Erro ao executar a consulta:', erro);
            res.status(404).json({'erro': 'Erro interno do servidor'});
        } else {
            res.status(200).json({'mensagem': 'Registro atualizado com sucesso'});
        }
    });
}
        delete(req, res)  {
            const id = req.params.id;
        
            
            const sql = "DELETE FROM selecoes WHERE id = $1";
            const values = [id];
        
        
            conexao.query(sql, values, (erro, resultado) => {
                if (erro) {
                    console.error('Erro ao executar a consulta:', erro);
                    res.status(404).json({'erro': 'Erro interno do servidor'});
                } else {
                    res.status(200).json({'mensagem': 'Registro excluído com sucesso'});
                }
            });
        }
}



export default new SelecaoController()
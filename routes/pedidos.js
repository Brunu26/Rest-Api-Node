const express = require('express');
const router = express.Router();

// retorna todos os pedidos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});
// insere um pedido
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

// retorna um pedido especifico
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_produto
           res.status(200).send({
            mensagem: 'Detalhes do pedido',
            id_pedido: id        
         });
   
    
});




// exclui um pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido excluido'
    });
});

module.exports = router;
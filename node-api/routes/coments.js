const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// RETURN ALL COMMENTS
router.get('/allcoments', (req, res, next) => {
    /*res.status(200).send({
        mensagem: 'Retorna todos os comentarios'
    });*/

    mysql.getConnection((error, conn) => {
        if (error) { console.error(error); res.status(500).send({ error: error })}
        conn.query(
            'SELECT * FROM comments;',
            (error, result, field) => {
                conn.release();
                if(error)
                {
                    return res.status(500).send({
                        error: error
                    })
                }
                
                return res.status(201).send({
                    response: result
                })
            }
        )
    });
});

// INCLUDE ONE COMMENT
router.post('/insertcomments', (req, res, next) => {

    mysql.getConnection((error, conn) => {
        if (error) { console.error(error); res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO comments (COMENTARIO, NOME) values (?, ?)',
            [req.body.comments, req.body.name],
            (error, result, field) => {
                conn.release();

                if(error)
                {
                    return res.status(500).send({
                        error: error,
                        response:null
                    })
                }

                res.status(201).send({
                    mensagem:'Comentario inserido com sucesso',
                    id_comentario: result.insertId
                })
            }
        )
    });

});

module.exports = router;
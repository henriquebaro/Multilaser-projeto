import React, { useState, useEffect } from "react";
import axios from 'axios';
import TabelaPedidosEnviados from './pedidos_enviados_tabela';
import Button from 'react-bootstrap/Button';
import { Box } from "@chakra-ui/react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/formpedidos.css";
import "../css/tabelapedidos.css";

function Pedidos_enviado() {
    const [slFornecedores, setSlFornecedores] = useState([]);
    const [fornecedor, setFornecedor] = useState({});
    const [id_fornecedor, setFornecedorId] = useState(null);
    const [telefone, setTelefone] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [dataReceber, setDataReceber] = useState('');

    const handleClienteChange = async (event) => {
        const id_fornecedor = event.target.value;
        console.log("id_fornecedor" + id_fornecedor);
        setFornecedorId(id_fornecedor);
    
        if (id_fornecedor) {
            try {
                const response = await axios.get(`http://localhost:3001/fornecedores/${id_fornecedor}`);
                const telefone = response.data.telefone;
                if (telefone) {
                    setTelefone(telefone);
                } else {
                    setTelefone('0'); // Define um valor padrão, caso o telefone seja nulo ou indefinido
                }
            } catch (error) {
                console.error('Erro ao buscar telefone do fornecedor:', error);
                setTelefone('0'); // Define um valor padrão em caso de erro
            }
        } else {
            setTelefone('0'); // Define um valor padrão quando nenhum fornecedor é selecionado
        }
    };
    const handleAdicionarPedido = async () => {
        if (!id_fornecedor || !telefone || !valorTotal || !dataReceber) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
    
        try {
            const formData = {
                id_fornecedor,
                telefone,
                valor_total: valorTotal,
                data_receber: dataReceber,
            };
            console.log(formData);
            await axios.post('http://localhost:3001/novopedido', formData);
            alert('Pedido adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar pedido:', error);
            alert('Erro ao adicionar pedido');
        }
        window.location.reload();
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fornecedorRes = await axios.get("http://localhost:3001/fornecedores");
                setSlFornecedores(fornecedorRes.data);

                const clientesObj = {};
                fornecedorRes.data.forEach((fornecedor) => {
                    clientesObj[fornecedor.id_fornecedor] = fornecedor.nome_empresa;
                });
                setFornecedor(clientesObj);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <center>
                <br />
                <h1>Adicione um pedido efetuado</h1>
                <br />
                <Box boxShadow='2xl' p='6' rounded='xl' bg='white'>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <select className="select" name="nome_empresa" id="nome_empresa" onChange={handleClienteChange}>
                                    <option key="default" value="">Selecione o fornecedor</option>
                                    {slFornecedores.map((slFornecedor) => (
                                        <option key={slFornecedor.id_fornecedor} value={slFornecedor.id_fornecedor}>{slFornecedor.nome_empresa}</option>
                                    ))}
                                </select>
                            </Col>
                            
                            <Col md={4}>
                                <input
                                    type="text"
                                    placeholder="Valor Total"
                                    value={valorTotal}
                                    onChange={(e) => setValorTotal(e.target.value)}
                                />
                            </Col>
                            <Col md={4}>
                             <label>data de entrega</label>
                             <br></br>
                               <input
                                    type="date"
                                   
                                    value={dataReceber}
                                    onChange={(e) => setDataReceber(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <br />
                        <center>
                            <Row>
                                <Col md={6}>
                                    <button variant="outline-light" className='botao_pedido ' type="submit" onClick={handleAdicionarPedido}>Adicionar Pedido</button>
                                </Col><Col className="telefone" md={4}>
                                <input
                                    type="text"
                                    placeholder="Telefone"
                                    value={telefone}
                                    readOnly
                                />
                            </Col>
                            </Row>
                        </center>
                    </Container>
                </Box>
            </center>
            <TabelaPedidosEnviados />
            <br /><br /><br /><br /><br />
        </>
    );
}

export default Pedidos_enviado;

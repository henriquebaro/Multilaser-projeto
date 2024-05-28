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
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const handleClienteChange = async (event) => {
        const id_fornecedor = event.target.value;
        console.log("id_fornecedor"+id_fornecedor)
        setFornecedorId(id_fornecedor);

        if (id_fornecedor) {
            try {
                const response = await axios.get(`http://localhost:3001/fornecedores/${id_fornecedor}`);
                setTelefone(response.data.telefone);
            } catch (error) {
                console.error('Erro ao buscar telefone do fornecedor:', error);
            }
        } else {
            setTelefone('');
        }
    };

    const handleAdicionarPedido = async () => {
        try {
            const formData = {
                id_fornecedor: id_fornecedor,
                telefone,
                valor_total: valorTotal,
                data_receber: dataReceber,
            };
            console.log(formData);
            await axios.post('http://localhost:3001/novopedido', formData);
            // window.location.reload();
            alert('Pedido adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar pedido:', error);
            alert('Erro ao adicionar pedido');
        }
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
    const alteraCliente = async (event) => {
        const nome_empresa = event.target.value;
        setNomeEmpresa(nome_empresa);
        console.log("nome_empresa"+nome_empresa)

        if (nome_empresa) {
            try {
                const response = await axios.get(`http://localhost:3001/fornecedores?nome_empresa=${nome_empresa}`);
                if (response.data.length > 0) {
                    setTelefone(response.data[0].telefone);
                    setFornecedor(nome_empresa);
                } else {
                    setTelefone('');
                }
            } catch (error) {
                console.error('Erro ao buscar telefone do fornecedor:', error);
            }
        } else {
            setTelefone('');
        }
    };
    return (
        <>
            <center>
                <br />
                <h1>Adicione um novo pedido</h1>
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
                                    placeholder="Telefone"
                                    value={telefone}
                                    readOnly
                                />
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
                                <input
                                    type="date"
                                    placeholder="Data Receber"
                                    value={dataReceber}
                                    onChange={(e) => setDataReceber(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <br />
                        <center>
                            <Row>
                                <Col md={6}>
                                    <Button variant="outline-light" className='botao' type="submit" onClick={handleAdicionarPedido}>Adicionar Pedido</Button>
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

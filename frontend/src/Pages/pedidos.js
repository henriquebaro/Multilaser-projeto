import React, { useState, useEffect } from "react";
import axios from 'axios';
// import Pedidos_form from '../Components/Pedidos_form';
import Tabela_pedidos from '../Components/Pedidos_tabela';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Box } from "@chakra-ui/react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/formpedidos.css";
import "../css/tabelapedidos.css";
import Rodape from "../Components/Rodape";

function Pedidos(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [slClientes, setSlClientes] = useState([]);
  const [slProdutos, setSlProdutos] = useState([]);
  const [idClientela, setClienteId] = useState(null);
  const [idProducts, setProdutoId] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState({});
  const [produtos, setProdutos] = useState({});
  const [quantidadeDisponivel, setQuantidadeDisponivel] = useState(0);
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);
  const [precoProduto, setPrecoProduto] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  const handleClienteChange = (event) => {
    setClienteId(event.target.value);
  };

  const handleProdutoChange = (event) => {
    const produtoId = event.target.value;
    setProdutoId(produtoId);

    const produtoSelecionado = slProdutos.find(produto => produto.idProdutos === parseInt(produtoId));
    if (produtoSelecionado) {
      setQuantidadeDisponivel(produtoSelecionado.quantidade);
      setPrecoProduto(produtoSelecionado.preco);
    }
  };

  const handleQuantidadeChange = (event) => {
    const quantidade = parseInt(event.target.value);
    setQuantidadeSelecionada(quantidade);
    setValorTotal(quantidade * precoProduto);
  };

  const handleAdicionarPedido = async () => {
    const valorTotalPedido = quantidadeSelecionada * precoProduto;
    try {
      await axios.post('http://localhost:3001/pedidos', {
        id: idClientela,
        idProdutos: idProducts,
        quantidade: quantidadeSelecionada,
        valorTotal: valorTotalPedido
      });
      window.location.reload();
      alert('Pedido adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error);
      alert('Erro ao adicionar pedido');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clientesData, produtosData, pedidosData] = await Promise.all([
          axios.get("http://localhost:3001/clientes"),
          axios.get("http://localhost:3001/produtos"),
          axios.get("http://localhost:3001/pedidos")
        ]);

        setSlClientes(clientesData.data);
        setSlProdutos(produtosData.data);

        const pedidosFormatados = pedidosData.data.map(pedido => ({
          ...pedido,
          valorTotal: parseFloat(pedido.valorTotal)
        }));

        setPedidos(pedidosFormatados);

        const clientesObj = {};
        clientesData.data.forEach((cliente) => {
          clientesObj[cliente.id] = cliente.nome;
        });
        setClientes(clientesObj);

        const produtosObj = {};
        produtosData.data.forEach((produto) => {
          produtosObj[produto.idProdutos] = produto.nomeProduto;
        });
        setProdutos(produtosObj);

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleExcluirUsuario = async (id_pedido) => {
    try {
      await axios.delete(`http://localhost:3001/pedidos/${id_pedido}`);
      const { data } = await axios.get("http://localhost:3001/pedidos");
      setPedidos(data);
      console.log("Pedido excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir pedido:", error);
    }
  };
    return(
        <>

        
        
         {/* <Pedidos_form/>  */}
          
          <center>
           <br/>
            <h1>Adicione um novo pedido</h1>
           <br/>
            <Box className='box' boxShadow='2xl' p='6' rounded='xl' bg='white'>
          <Container>
            <Row>
              <Col md={4}><select className="select" name="id_cliente" id="id_cliente" onChange={handleClienteChange}>
        <option value="">Selecione o cliente</option>
        {slClientes.map((slCliente) => (
          <option key={slCliente.id} value={slCliente.id}>{slCliente.nome}</option>
        ))}
      </select></Col>

      <Col md={4}><select className="select" name="id_produto" id="id_produto" onChange={handleProdutoChange}>
        <option value="">Selecione o Produto</option>
        {slProdutos.map((slProduto) => (
          <option key={slProduto.idProdutos} value={slProduto.idProdutos}>{slProduto.nomeProduto}</option>
        ))}
      </select></Col>

      <Col md={4}>{quantidadeDisponivel > 0 && (
        <select className="select" name="quantidade" id="quantidade" onChange={handleQuantidadeChange}>
          <option value="">Selecione a quantidade</option>
          {Array.from({ length: quantidadeDisponivel }, (_, index) => index + 1).map((quantidade) => (
            <option key={quantidade} value={quantidade}>
              {quantidade}
            </option>
          ))}
        </select>
      )}</Col>
            </Row>
         <br/>
         <center>
                    <Row>
            <Col md={6}><div><Button variant="light">Valor Total: R$ {valorTotal.toFixed(2)}</Button></div></Col>
            <Col md={6}><Button variant="outline-light" className='botao'type="submit" onClick={handleAdicionarPedido}>Adicionar Pedido</Button></Col>
          </Row>
         </center>

          </Container>
         </Box>
          </center>
          
          <Button className="botaotabela" variant="primary" onClick={handleShow}>
        Tabela dos pedidos
      </Button>
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Tabela Pedidos</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Tabela_pedidos/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar Dados
          </Button>
        </Modal.Footer>
      </Modal>

      <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <Rodape/>
        </>
    )
}
export default Pedidos
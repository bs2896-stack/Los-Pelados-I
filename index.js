import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";
import { readFileSync, writeFileSync } from "fs";

// Cargar sabores y productos
let sabores = JSON.parse(readFileSync("./data/sabores.json", "utf-8"));
let productos = JSON.parse(readFileSync("./data/productos.json", "utf-8"));

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

// Guardar pedido
let pedidos = JSON.parse(readFileSync("./data/pedidos.json", "utf-8"));
let nuevoPedido = {
  cliente: cliente,
  producto: producto.nombre,
  sabores: saboresElegidos,
};
pedidos.push(nuevoPedido);
writeFileSync("./data/pedidos.json", JSON.stringify(pedidos, null, 2));

package com.example.atividade2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview
import com.example.atividade2.ui.theme.Atividade2Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Atividade2Theme {
                ProdutoApp()
            }
        }
    }
}

@Composable
fun ProdutoApp() {
    Box(
        modifier = Modifier
            .fillMaxSize() //para deixar aparente na tela inteira
            .background(Color(0xFF191970)), // para mudar a cor de fundo para azul meia noite ;)
        contentAlignment = Alignment.Center //para deixar tudo no centro da tela
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally, //para deixar tudo alinhado
        ) {
            Text(text = "Produto: Fone Bluetooth", fontSize = 25.sp, color = Color.White) // para colocar o texto e o tamanho dele com .sp e mudar a cor do texto
            Text(
                text = "Preço: R$ 149,90", // para colocar o preço do produto
                fontSize = 18.sp, // o tamanho do texto
                color = Color.White, // para mudar a cor da escrita
                modifier = Modifier.padding(top = 8.dp, bottom = 16.dp) // para dar espaçamento entre os textos e o botao
            )

            // Botão "Comprar"
            Card(
                colors = CardDefaults.cardColors(containerColor = Color(0xFF64B5F6)),
                modifier = Modifier
                    .width(250.dp) // para modificar a largura do botao
                    .height(60.dp) // para modificar a altura do botao
            ) {
                Box(
                    contentAlignment = Alignment.Center, //para centralizar o texto no botao
                    modifier = Modifier.fillMaxSize() // para deixar no botao inteiro
                ) {
                    Text(text = "Comprar", color = Color.White) //para escrever o queetara dentro do botao com a cor branca
                }
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewProdutoApp() {
    Atividade2Theme {
        ProdutoApp()
    }
}


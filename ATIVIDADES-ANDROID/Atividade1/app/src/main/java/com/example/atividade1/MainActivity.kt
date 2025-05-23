package com.example.atividade1

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.atividade1.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CardsFicha()
        }
    }
}


@Composable
fun CardsFicha () {
    Surface(
        modifier = Modifier.fillMaxSize(), //para ficar na tela inteira
        color = Color(0xFF191970) //para cudar a cor de fundo da tela
    ) {
        Column(
            verticalArrangement = Arrangement.Center, //para deixar aos cartoes na tela inteira
        ) {
            Card {
                Text(
                    text = "Nome: João Silva\n" +
                            "Tel: (11) 99999-9999\n " +
                            "Email: joao@email.com\n",
                    Modifier.padding(30.dp), style = TextStyle(
                        color = Color.Black,
                        fontSize = 29.sp
                    )
                )

            }
            Spacer(modifier = Modifier.height(50.dp))
            Card {
                Text(
                    text =  "Nome: Maria Souza \n"+
                            "Tel: (21) 98888-8888\n"+
                            "Email: maria@email.com\n",
                    Modifier.padding(30.dp), style = TextStyle(
                        color = Color.Black,
                        fontSize = 29.sp
                    )
                )
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewProdutoApp() {
    MaterialTheme {
        CardsFicha()
    }
}


package com.example.atividade3

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                MyApp()
            }
        }
    }
}

@Composable
fun MyApp() {
    var time1 by remember { mutableStateOf(0) }
    var time2 by remember { mutableStateOf(0) }

    Surface(
        modifier = Modifier.fillMaxSize(), //para preencher a tela inteira
        color = Color(0xFF191970) //para mudar a cor da tela inteira
    ) {
        Column(
            verticalArrangement = Arrangement.Center, //para ficar no centro da tela de cima para baixo
            horizontalAlignment = Alignment.CenterHorizontally //para ficar no centro da tela de um lado para o outro
        ) {
            Text(
                text = "time 1: $time1 pts", // para colocar o nome do time e a quantidade de pts
                style = TextStyle(color = Color.White, fontSize = 30.sp) //para colocar cor
            )
            Spacer(modifier = Modifier.height(20.dp))
            CreateCircle("+ 1 pt") { //para colocar o texto dentro do circulo
                time1 += 1
                Log.d("time1", "Valor: $time1")
            }

            Spacer(modifier = Modifier.height(40.dp)) //para dar espaçamento entre os botões

            Text(
                text = "time 2: $time2 pts", // para colocar o nome do time e a quantidade de pts
                style = TextStyle(color = Color.White, fontSize = 30.sp) //para colocar cor
            )
            Spacer(modifier = Modifier.height(20.dp))
            CreateCircle("+ 1 pt") { //para colocar o texto dentro do circulo
                time2 += 1
                Log.d("time2", "Valor: $time2")
            }
        }
    }
}

@Composable
fun CreateCircle(text: String, onTap: () -> Unit) {
    Card(
        modifier = Modifier
            .padding(3.dp)
            .size(160.dp)
            .clickable { onTap() },
        shape = CircleShape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF90CAF9))
    ) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            Text(text = text)
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MaterialTheme {
        MyApp()
    }
}

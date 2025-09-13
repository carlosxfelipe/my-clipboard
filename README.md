# React Native ClipboardX

Este pacote mostra como integrar um módulo nativo simples de **Clipboard (texto)** no seu app React Native.

## Estrutura incluída

- Android (Kotlin)
- iOS (Swift + Obj-C bridge)
- Wrapper JS/TS

## Uso

### Android
1. Copie a pasta `clipboardx` de `android/app/src/main/java/com/myclipboard/clipboardx/` para o seu projeto.  
2. Ajuste o `package` no topo dos arquivos `ClipboardXModule.kt` e `ClipboardXPackage.kt` para refletir o **nome do pacote do seu app**  
   - Exemplo: `package com.seuprojeto.clipboardx`.  
3. No arquivo `MainApplication.kt`, adicione o `ClipboardXPackage` à lista de pacotes. Isso deve ser feito manualmente, conforme o exemplo deste projeto.

### iOS
1. Adicione os arquivos `ClipboardX.swift` e `ClipboardX.m` dentro da pasta do seu app no Xcode (ex.: `ios/SeuProjeto/`).  
2. Marque os dois arquivos no **Target Membership** do app.  
3. Confirme em **Build Phases > Compile Sources** que eles aparecem listados.

### JavaScript/TypeScript
1. Crie um wrapper em `src/native/ClipboardX.ts` por exemplo.  
2. Exemplo de uso:

```ts
import ClipboardX from './native/ClipboardX';

await ClipboardX.setString('Olá mundo');
const texto = await ClipboardX.getString();
```


# 📧 Configuração do EmailJS para Formulário de Fornecedor

Este documento contém instruções passo a passo para configurar o serviço de email do formulário "Seja um Fornecedor".

## 🚀 Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em **"Sign Up"** (Cadastrar)
3. Crie sua conta gratuita (Gmail recomendado)
4. Confirme seu email

## 📨 Passo 2: Configurar Serviço de Email

1. No dashboard do EmailJS, clique em **"Add New Service"**
2. Selecione **Gmail** (ou outro provedor de sua preferência)
3. Conecte sua conta `comercial@m3constru.com.br`
4. Dê um nome ao serviço (ex: "M3 Fornecedores")
5. **Copie o Service ID** (algo como `service_abc123`)

## 📝 Passo 3: Criar Template de Email

1. Vá para a aba **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

### Subject (Assunto):
```
{{subject}}
```

### Content (Conteúdo):
```
Nova Solicitação de Parceria - M3 Engenharia

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DADOS DO FORNECEDOR:

Nome: {{from_name}}
Empresa: {{company_name}}
Email: {{user_email}}
Telefone: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💼 DESCRIÇÃO DA PARCERIA:

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este email foi enviado através do formulário "Seja um Fornecedor" do site da M3 Engenharia.
```

### Settings (Configurações):
- **To Email**: `{{to_email}}` (será preenchido automaticamente com comercial@m3constru.com.br)
- **From Name**: `{{from_name}}`
- **Reply To**: `{{user_email}}`

4. **Salve** o template
5. **Copie o Template ID** (algo como `template_xyz789`)

## 🔑 Passo 4: Obter Public Key

1. Vá para **"Account"** > **"General"**
2. Localize **"Public Key"**
3. **Copie a Public Key** (algo como `abcdef123456`)

## ⚙️ Passo 5: Configurar no Código

Abra o arquivo `src/lib/emailjs-config.ts` e substitua os placeholders:

```typescript
export const EMAILJS_CONFIG = {
  // Substitua pelos valores copiados:
  serviceId: "SEU_SERVICE_ID_AQUI",     // ← Cole o Service ID aqui
  templateId: "SEU_TEMPLATE_ID_AQUI",   // ← Cole o Template ID aqui
  publicKey: "SUA_PUBLIC_KEY_AQUI",     // ← Cole a Public Key aqui
};
```

### Exemplo:
```typescript
export const EMAILJS_CONFIG = {
  serviceId: "service_m3fornec",
  templateId: "template_parceria",
  publicKey: "abc123def456ghi",
};
```

## ✅ Passo 6: Testar o Formulário

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse: `http://localhost:5173/seja-fornecedor`

3. Preencha o formulário com dados de teste

4. Clique em **"Enviar Proposta de Parceria"**

5. Verifique:
   - ✅ Mensagem de sucesso aparece
   - ✅ Email chegou em `comercial@m3constru.com.br`
   - ✅ Assunto: "Fornecedor / Parcerias - [Nome]"
   - ✅ Dados formatados corretamente
   - ✅ Se anexou arquivo, ele está no email

## 🔧 Suporte para Anexos

### Configurando Anexos no EmailJS:

1. No template, adicione na área de **Advanced Settings**:
2. Habilite **"Attachments"**
3. Configure:
   - **Attachment**: `{{attachment_content}}`
   - **Filename**: `{{attachment_name}}`

> **Nota**: Anexos funcionam automaticamente no plano gratuito do EmailJS!

## 📊 Limites do Plano Gratuito

- ✅ **200 emails/mês**
- ✅ **Anexos permitidos** (até 5MB)
- ✅ **Templates ilimitados**
- ✅ **2 serviços de email**

## ⚠️ Troubleshooting

### Email não está chegando?
1. Verifique spam/lixo eletrônico
2. Confirme que `comercial@m3constru.com.br` está correto no template
3. Verifique console do navegador para erros

### Erro "Service ID not found"?
- Verifique se copiou o Service ID corretamente
- Confirme que o serviço está ativo no dashboard

### Anexo não está indo?
- Verifique se habilitou attachments no template
- Confirme que o arquivo é menor que 5MB
- Formatos aceitos: PDF, JPEG, PNG, WebP

## 📞 Contato

Se precisar de ajuda adicional, consulte a documentação oficial:
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/creating-email-template/)

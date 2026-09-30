import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/lib/atendimentoAuth.js", import.meta.url), "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const {
  contactConfirmationMatches,
  maskCellphone,
  maskCpf,
  maskEmail,
  normalizeCellphone,
  normalizeCpf,
} = await import(moduleUrl);

test("normaliza CPF e celular sem aceitar tamanhos inválidos", () => {
  assert.equal(normalizeCpf("123.456.789-01"), "12345678901");
  assert.equal(normalizeCpf("123"), "");
  assert.equal(normalizeCellphone("+55 (21) 98765-4321"), "21987654321");
  assert.equal(normalizeCellphone("2020-1300"), "");
});

test("mascara os contatos sem expor os valores completos", () => {
  assert.equal(maskCpf("12345678901"), "123.456.789-01");
  assert.equal(maskCellphone("21987654321"), "(21) 98765-****");
  assert.equal(maskEmail("cliente@exemplo.com"), "c******@exemplo.com");
});

test("confirma o canal usando a regra da BETA-2128", () => {
  const contact = { email: "cliente@exemplo.com", celular: "21987654321" };
  assert.equal(contactConfirmationMatches("email", "CLIENTE", contact), true);
  assert.equal(contactConfirmationMatches("sms", "4321", contact), true);
  assert.equal(contactConfirmationMatches("sms", "1234", contact), false);
});

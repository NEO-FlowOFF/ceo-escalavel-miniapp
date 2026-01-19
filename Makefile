# NEØ FlowOFF - Operation Makefile
# Protocol: B2B-Cyber-Scalability

.PHONY: install dev build preview clean help protocol-push

# Default: Show help
help:
	@echo "=========================================================="
	@echo "     N E Ø   F L O W O F F   -   O P S   M A K E F I L E     "
	@echo "=========================================================="
	@echo "Comandos disponíveis:"
	@echo "  make install       - Instala dependências do projeto"
	@echo "  make dev           - Inicia o servidor de desenvolvimento"
	@echo "  make build         - Executa o build de produção"
	@echo "  make preview       - Visualiza o build localmente"
	@echo "  make clean         - Remove pastas de build e dependências"
	@echo "  make push MESSAGE=\"sua mensagem\" - Executa o NΞØ Protocol (Audit, Build, Commit, Push)"
	@echo "=========================================================="

install:
	npm install

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

clean:
	rm -rf dist
	rm -rf node_modules
	@echo "Dist and Node Modules removed. System clean."

push:
	@echo "Iniciando NΞØ Protocol: Secure Commit & Push..."
	@echo "1. Security Audit..."
	npm audit
	@echo "2. Building for Production..."
	npm run build
	@echo "3. Staging changes..."
	git add .
	@echo "4. Committing with Conventional Commits..."
	@if [ "$(MESSAGE)" = "" ]; then \
		echo "ERRO: Informe uma mensagem. Ex: make push MESSAGE='feat: descricao'"; \
		exit 1; \
	fi
	git commit -m "$(MESSAGE)"
	@echo "5. Pushing to Remote..."
	git push origin main
	@echo "Protocolo finalizado com sucesso."

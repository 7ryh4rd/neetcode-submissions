class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Objeto que vai funcionar como o nosso mapa de anagramas
        const res = {};

        // Percorre cada string do array de entrada
        for (let s of strs) {
            // Separa em letras, ordena alfabeticamente e junta de volta em uma STRING (a etiqueta)
            const sortedS = s.split('').sort().join('');

            // Se ainda NÃO existe uma gaveta com essa etiqueta no objeto, cria um array vazio
            if (!res[sortedS]) {
                res[sortedS] = [];
            }

            // Acessa a gaveta da etiqueta 'sortedS' e adiciona a palavra ORIGINAL 's'
            res[sortedS].push(s);
        }

        // Retorna apenas as listas de palavras (os valores do objeto), ignorando as etiquetas
        return Object.values(res);
    }
}
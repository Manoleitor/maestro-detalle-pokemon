// Función para llenar la tabla con los datos de los Pokémon
function fillPokemonTable() {
    const pokemonTableBody = $('#pokemon-table-body');

    // Recorre los datos de los Pokémon y agrega una fila a la tabla para cada uno
    pokemonData.pokemon.forEach(pokemon => {
        const row = $('<tr>').addClass('maestro');
        row.append('<td>'+pokemon.name+'</td><td>'+pokemon.height+'</td><td>'+pokemon.id+'</td>');

        row.click(function() {
            // Verificar si esta fila ya tiene una fila detalle
            const detailRow = $(this).next('.detalle');
    
            // Si ya existe una fila de detalle, la eliminamos
            if (detailRow.length) {
                detailRow.remove();
            } else {
                // Crear una nueva fila de detalle
                const newRow = $('<tr>').addClass('detalle');
                const newCell = $('<td>').attr('colspan', '100%');
                
                // Crear una nueva tabla para las habilidades
                const abilitiesTable = $('<table>').addClass('abilities-table');
                const abilitiesHeader = $('<thead>').append($('<tr>').append($('<th>').text('Habilidad')).append($('<th>').text('Efecto')));
                const abilitiesBody = $('<tbody>');
                
                // Obtener las habilidades del Pokémon
                const abilities = pokemon.abilities;
                
                // Llenar la tabla de habilidades
                abilities.forEach(function(ability) {
                    const row = $('<tr>').append($('<td>').text(ability.name)).append($('<td>').text(ability.effect));
                    abilitiesBody.append(row);
                });
                
                // Combinar todo y agregar la tabla de habilidades a la celda de la fila de detalle
                abilitiesTable.append(abilitiesHeader).append(abilitiesBody);
                newCell.append(abilitiesTable);
                newRow.append(newCell);
                
                // Insertar la fila de detalle después de la fila seleccionada
                $(this).after(newRow);
            }

        });
        pokemonTableBody.append(row);
    });
}

// Obtiene los datos del JSON y los parsea
// const pokemonData = new PokemonData(jsonData.data.pokemon);

// Llama a la función para llenar la tabla
fillPokemonTable();

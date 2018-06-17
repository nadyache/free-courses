var str_number = '1113aa36721bb19';

    input_base = 7; // основание системы счисления 2..35

    output_base = 11;

    result = 0

for (i = 0; i < str_number.length; i++) {

    character = str_number.charAt(i);

    if ((character.charCodeAt() >= 48) && (character.charCodeAt() < 58)) {

        num = Number(character);

    }

    else if ((character.charCodeAt() >= 97) && (character.charCodeAt() < 123)) {
 
            num = Number(character) - 87;

    }

    else {

         process.stdout.write('это не цифра и не буква')

    }

result += num * Math.pow(input_base, i);
}

process.stdout.write(result)
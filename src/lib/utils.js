module.exports = {
    age: function (timestamp) {
        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (
            month < 0 ||
            (month == 0 && today.getDate() <= birthDate.getDate())
        ) {
            age -= 1;
        }

        return age;
    },

    date: function (timestamp) {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`,
        };
    },

    graduation: function (option) {
        switch (option) {
            case "medio": {
                return "Ensino médio completo";
            }
            case "superior": {
                return "Ensino superior completo";
            }
            case "mestrado": {
                return "Mestrado";
            }
            case "doutorado": {
                return "Doutorado";
            }
        }
    },

    grade: function (option) {
        switch (option) {
            case "5F": {
                return "5º ano ensino fundamental";
            }
            case "6F": {
                return "6º ano ensino fundamental";
            }
            case "7F": {
                return "7º ano ensino fundamental";
            }
            case "8F": {
                return "8º ano ensino fundamental";
            }
            case "9F": {
                return "9º ano ensino fundamental";
            }
            case "1M": {
                return "1º ano ensino médio";
            }
            case "2M": {
                return "2º ano ensino médio";
            }
            case "3M": {
                return "3º ano ensino médio";
            }
        }
    },
};

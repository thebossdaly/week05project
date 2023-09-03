


class People {
    constructor(name, position){
        this.position = position;
        this.name = name;
    }

    describe(){
        return `${this.employer} has people in this ${this.position}`
    }
}



class Team {
    constructor(name){
        this.name = name
        this.people = []
    }
    addPeople(people){
        if(people instanceof People){
            this.people.push(people)
        }else{
            throw new Error('Nobody is there')
        }
    }
    describe(){
        return `${this.name} has ${this.people.length} working there`
    }
}


class Menu {
    constructor(){
        this.team = [];
        this.selectedTeam = null
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbyeeeee!')
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `)
    }
    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) back
        1) hire people
        2) fire people
        -------------
        ${teamInfo}
        `)
    }
    displayTeam(){
        let teamString = '';
        for (let i = 0; i < this.team.length; i++){
            teamString += i + ') ' + this.team[i].name; + '\n'
        }
        alert(teamString);
    }
    createTeam(){
        let name = prompt('Enter name for new team:');
        this.team.push(new Team(name));
    }
    viewTeam(){
        let index = prompt('Enter index of the team you wish to view:');
        if (index > -1 && index < this.team.length){
            this.selectedTeam = this.team[index]
            let description = 'Team name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.people.length; i++){
                description += i + ') ' + this.selectedTeam.people[i].name + '- ' + this.selectedTeam.people[i].position + '\n'
            }
            let selection = this.showTeamMenuOptions(description);
            switch (selection){
                case '1':
                    this.hirePeople();
                    break;
                case '2':
                    this.firePeople();
            }
        }
    }
    deleteTeam(){
        let index = prompt('Enter the index of the team you wish to delete:')
        if (index > -1 && index < this.team.length){
            this.team.splice(index, 1)
        }
    }
    hirePeople() {
        let name = prompt('Enter name for new person:');
        let position = prompt('Enter position for new person:');
        this.selectedTeam.people.push(new People(name, position));
    }    
    firePeople(){
        let index = prompt('Enter the index of the person you want to fire');
        if(index > -1 && index < this.selectedTeam.people.length){
            this.selectedTeam.people.splice(index, 1)
        }
    }
}

let menu = new Menu();
menu.start()
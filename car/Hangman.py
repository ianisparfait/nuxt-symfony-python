import random
import time

# variables
def main():
    global count
    global display
    global word
    global already_guessed
    global length
    global play_game
    words_to_guess = ["accompli", "salut", "velo", "bisous", "elastique"]
    word = random.choice(words_to_guess)
    length = len(word)
    count = 0
    display = '_' * length
    already_guessed = []
    play_game = ""

# Pour rejouer, ça évite de relaner le truc.
def play_loop():
    global play_game
    play_game = input("On rejoue ? y = oui allons-y, n = non \n")
    while play_game not in ["y", "n","Y","N"]:
        play_game = input("On rejoue ? y = oui allons-y, n = non \n")
    if play_game == "y":
        main()
    elif play_game == "n":
        print("Humm, a plus !")
        exit()

# Le jeu:
# TODO: Faire mieux que avec des conditions bizarre.
def hangman():
    global count
    global display
    global word
    global already_guessed
    global play_game
    limit = 2
    guess = input("Mot: " + display + " A toi de jouer: \n")
    guess = guess.strip()
    if len(guess.strip()) == 0 or len(guess.strip()) >= 2 or guess <= "9":
        print("Hop hop, pas de précipitation ! Met une lettre s'il te plaît.\n")
        hangman()


    elif guess in word:
        already_guessed.extend([guess])
        index = word.find(guess)
        word = word[:index] + "_" + word[index + 1:]
        display = display[:index] + guess + display[index + 1:]
        #print(display + "\n")

    elif guess in already_guessed:
        print("T'es nul, essai encore.\n")

    else:
        count += 1

        if count == 1:
            time.sleep(1)
            print("   _____ \n"
                  "  |     | \n"
                  "  |     | \n"
                  "  |      \n"
                  "  |      \n"
                  "  |      \n"
                  "  |      \n"
                  "__|__\n")
            print("Non... " + str(limit - count) + " Choix restant\n")

        elif count == 2:
            time.sleep(1)
            print("   _____ \n"
                  "  |     | \n"
                  "  |     |\n"
                  "  |     o \n"
                  "  |    -|- \n"
                  "  |    / \\\n"
                  "  |      \n"
                  "__|__\n")
            print("Perdu. " + str(limit - count) + " T'es mauvais !\n")
            play_loop()

    if word == '_' * length:
        print(display)
        print("Ouais ok, bien joué!")
        play_loop()

    elif count != limit:
        hangman()


main()


hangman()
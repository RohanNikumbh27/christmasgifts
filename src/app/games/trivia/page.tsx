"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, Trophy, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import NativeAd from "@/components/NativeAd";

interface Question {
    question: string;
    options: string[];
    correct: number;
}

const questions: Question[] = [
    {
        question: "What country started the tradition of putting up a Christmas tree?",
        options: ["England", "Germany", "USA", "France"],
        correct: 1,
    },
    {
        question: "How many reindeer does Santa have (including Rudolph)?",
        options: ["7", "8", "9", "10"],
        correct: 2,
    },
    {
        question: "What is the name of the Grinch's dog?",
        options: ["Max", "Buddy", "Rex", "Spot"],
        correct: 0,
    },
    {
        question: "In which country is it tradition to eat KFC for Christmas dinner?",
        options: ["USA", "UK", "Japan", "Australia"],
        correct: 2,
    },
    {
        question: "What plant is traditionally hung for kissing under?",
        options: ["Holly", "Mistletoe", "Ivy", "Poinsettia"],
        correct: 1,
    },
    {
        question: "What is Frosty the Snowman's nose made of?",
        options: ["Carrot", "Coal", "Button", "Stick"],
        correct: 2,
    },
    {
        question: "Which reindeer is named after a weather phenomenon?",
        options: ["Dasher", "Blitzen", "Comet", "Donner"],
        correct: 1,
    },
    {
        question: "What color suit did Santa originally wear before Coca-Cola's ads?",
        options: ["Blue", "Green", "Brown", "Red"],
        correct: 1,
    },
    {
        question: "In 'Home Alone', where is the family going for Christmas?",
        options: ["London", "Paris", "Rome", "Berlin"],
        correct: 1,
    },
    {
        question: "What do children in the Netherlands leave out for Santa's horse?",
        options: ["Hay", "Carrots", "Apples", "Sugar cubes"],
        correct: 1,
    },
];

export default function TriviaGame() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleAnswer = (index: number) => {
        if (isAnswered) return;

        setSelectedAnswer(index);
        setIsAnswered(true);

        if (index === questions[currentQuestion].correct) {
            setScore((s) => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion + 1 >= questions.length) {
            setIsGameOver(true);
        } else {
            setCurrentQuestion((q) => q + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        }
    };

    const restartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setIsGameOver(false);
    };

    const question = questions[currentQuestion];

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Header */}
            <header className="sticky top-0 z-40 glass border-b border-[var(--card-border)]">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.push("/games")}
                        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Games</span>
                    </button>
                    <ThemeToggle />
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-[var(--foreground)] mb-2">
                        ❓ Christmas Trivia
                    </h1>
                    <p className="text-[var(--text-muted)]">
                        Test your holiday knowledge!
                    </p>
                </div>

                {/* Progress */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-[var(--foreground)]">
                            {currentQuestion + 1}/{questions.length}
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Question</div>
                    </div>
                    <div className="card !p-4 text-center">
                        <div className="text-2xl font-bold text-green-500">{score}</div>
                        <div className="text-sm text-[var(--text-muted)]">Score</div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="card mb-6">
                    <h2 className="text-xl font-semibold text-[var(--foreground)] mb-6">
                        {question.question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-3">
                        {question.options.map((option, index) => {
                            let buttonClass = "w-full text-left px-4 py-3 rounded-xl border transition-all ";

                            if (!isAnswered) {
                                buttonClass += "border-[var(--card-border)] hover:border-red-500 hover:bg-red-500/10";
                            } else if (index === question.correct) {
                                buttonClass += "border-green-500 bg-green-500/20 text-green-400";
                            } else if (index === selectedAnswer) {
                                buttonClass += "border-red-500 bg-red-500/20 text-red-400";
                            } else {
                                buttonClass += "border-[var(--card-border)] opacity-50";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(index)}
                                    className={buttonClass}
                                    disabled={isAnswered}
                                >
                                    <span className="font-medium">{option}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Next Button */}
                {isAnswered && !isGameOver && (
                    <div className="flex justify-center mb-6">
                        <button onClick={nextQuestion} className="btn-primary">
                            <span>Next Question</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

                {/* Game Over Modal */}
                {isGameOver && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="card text-center max-w-sm w-full animate-scale-in">
                            <div className="text-6xl mb-4">
                                {score >= 8 ? "🏆" : score >= 5 ? "🎄" : "⭐"}
                            </div>
                            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                Quiz Complete!
                            </h2>
                            <p className="text-[var(--text-muted)] mb-2">
                                You got {score} out of {questions.length} correct!
                            </p>
                            <p className="text-lg font-semibold mb-4">
                                {score >= 8
                                    ? "🎅 You're a Christmas Expert!"
                                    : score >= 5
                                        ? "🎄 Good job, holiday fan!"
                                        : "❄️ Keep learning about Christmas!"}
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button onClick={restartGame} className="btn-primary">
                                    <RotateCcw className="w-4 h-4" />
                                    <span>Play Again</span>
                                </button>
                                <button onClick={() => router.push("/games")} className="btn-secondary">
                                    More Games
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Ad */}
                <NativeAd unitName="unit1" />
            </div>
        </main>
    );
}

# Unit-2 Knowledge Representation ##

## Syllabus ##

- Propositional logic and Predicate logic
- Procedural vs. Declarative knowledge
- Knowleddge representation structure such as frame, semantic networks and script
- Resolution in predicate logic, forward vs. backward reasoning
- Non-monotonic reasoning, logics for non-monotonic reasoning.

## What is knowledge? ##

- Knowledge is a familiarity, awareness, or understanding of someone or something, such as facts, information, descriptions, or skills, which is acquired through experience or education by perceiving, discovering, or learning.

Knowledge can take many forms. Some simple examples are:

- John has an umbrella.
- It is raining.
- An umbrella stops you from getting wet when it's raining.
- An umbrella will only stop you getting wet if used properly.
- Umbrella's are not so useful when it is very windy.

In order to solve the complex problems encountered in AI, one generally needs a large amount of knowledge, and suitable mechanisms for representing and manipulaitng the knowledge.

## Knowledge Representation ##

The object of a `knowledge representation` is to express knowledge in a computer tractable form, so that it can be used to enable our AI agents to perform well.

A `Knowledge Representation Language`is defined by two aspects:

- `Syntax` it defines which configurations of the compononets of the language constitute valid sentences.
- `Semantics` it defines which facts in the world the senteces refer to, and hence the statement about the world that each sentence makes.

**Requirements of knowledge representation:**

- `Representational Adequacy`: the ability to represent all the diffrent kinds of knowledge that might be needed in that domain.
- `Inferential Adequacy`: the ability to manipulate the representation structures to derive new structures from existing structures.
- `Inferential Efficiency`: the ability to incorporate additional information into the knowledge structure which can be used to focus the attention of the inference mechanisms in the most promising directions.
- `Acquisational Adequacy`: the ability to acquire new information easily. Ideally the agent should be able to control its own knowledge acquisition, but direct insertion of information by a `knowledge engineer` would be acceptable.

## techniques of knowldege representation ##

- Logical representation
- Semantic networks
- Frames
- Scripts

## Logic ##

The idea is that an agent can represent knowledge of itw world, its goal and the current situation by sentences in logic and decide what to do by inferring that a certion action or course of action is appropriate to achieve its goal.

**Knowledge Based Agent:**

- `Intelligent Agent`: Perceiving, Knowledge Representaion, Reasoning and Acting.
- The primary component of a knowledge based agent its `knowledge-base`
- A knowledge-base `is a set of sentences`.
- Each sentence is experssed in a language called `knowledge representaion knowledge`.
- There must mechanisms to `derive new sentences from old ones`. Thsi process is known as inferencing or reasoning.

The agent must be able to:

- Represent state, actions, etc.
- Incorporate new percepts
- Update internal representaion of the world
- Deduce hidden properties of the world
- Deduce appropriate actions

**Types of Logic:**

- Propositional Logic
- Predicate Logic

### Propositional Logic ###

- Propositional logic is a formal system in mathematics and logic. It is also called `Propositional Calculus` or `Statement Logic`.
- It is a `formal language` that uses `symbols` to express `statements` or `propositions`.
- It is a `declarative language` because it is used to `declare` facts about the world.
- It is a `procedural language` because it is used to describe how to do something.
- It is a `logic` because it is used to `reason` about the world.
- It is a technique of knowledge representation in logical and mathematical form.
- A statement is also called a `closed sentence` because its truth value is not open to question.

**Examples:**

a. It is Sunday.
b. The sunrises from West (false proposition)
c. 5 is a prime number.

**Syntax of Propositional Language:**

1. Atomic Propositions: they are the simple propostions. it consists of a single proposition symbol.
2. Compound proposition: they are complex propostions. it consists of more than one proposition symbol.

## Limitations ##

- We cannot represent relations like ALL, some or none with propositional logic.
- Proposotional logic has limited expressive power.
- In propositional logic, we cannot describe statements in terms of their properties or logical relationship.

## First Order Logic (predicate logic) ##

- another way of knowledge representation
- it is an extension to propositional llogic
- predicate logic deals with predicates which are propositions.

**Syntax:**

- terms
- predicates
- quantifiers

### Terms ###

- A term denotes some objects other tahn true or false.
- A constant of type W is a name that denotes a particular object in a set W.

Example: 5, Tommy

- A variable of type W is a name that denote any element in the set set W.

Example: x &epsilon; N denotes a natural number
d &epsilon; M denotes the name of the dog

**Terms:Functions:**

- A functional terms take n objects of type W1 to Wn as input and returns an objects of type W.
F = (W1, W2,.........,Wn)
plus(3,4)

### Predicates ###

- Predicate are like functions except that their return type is true or false.

Types of predicates:

- A predicate with no variable is a proposition
- A predicate with one varible is a property

**Formulation of predicates:**

P v Q
P ^ Q
~ P
P=>Q

### Quantifiers ###

- There are two basic quantifiers in FOL
&forall; "for all" - universal quantifier
         " there exists" - existential quantifier

## Solving Problems ##

Convert following first order predicate into clausal normal form

1. All people who are graduating are happy.
CNF: ¬Graduating(x) ∨ Happy(x)
2. All happy people smile.
CNF: ¬Happy(x) ∨ Smile(x)
3. Someone is graduating.

Convert the following English Statements to statements in first logic

1. every boy or girl is a child.

Let B(x) represent "x is a boy."
Let G(x) represent "x is a girl."
Let C(x) represent "x is a child."
The statement of first-order logic: `∀x (B(x) ∨ G(x) → C(x))`
2. every child gets a doll or a train or a lump of coal.

Let D(x) represent "x gets a doll."
Let T(x) represent "x gets a train."
Let L(x) represent "x gets a lump of coal."
The statement of first-order logic: `∀x C(x) → (D(x) ∨ T(x) ∨ L(x))`
3. no boy gets any doll

The statement of first-order logic: `∀x (B(x) → ¬D(x))`
4. no child who is good gets lump of coal.

Let Gd(x) represent "x is good."
The statement of first-order logic: `∀x (C(x) ∧ Gd(x) → ¬L(x))`
5. jack is a boy.

Let J be a constant representing "Jack."
The statement of first-order logic: `B(J)`

### Sematic Network Example ###

Tom is an instance of dog.
Tom caught a cat.
Tom is owned by rashan.
Tom is brown in colour.
Dogs like bones.
The dog sat on the mat.
A dog is a mammal.
A cat is an instance animal.
All mammals are animals.
Mammals have fur.

### Write a script for going to the bank to withdraw money ###

SCRIPT : Widthdraw Money
TRACK: Bank
PROPS: Money, Counter, Form, Token
Roles: P = Customer, E = Employee, C = Cashier
Entry Conditions: P has no or less money.
                    The bank is open.
Results: P has more money.
Scene 1: Entering
P PTRANS P into the Bank
P ATTEND eyes to E
P MOVE P to E

## Reasoning in Artificial Intelligence ##

- The reasoning is the mental process of deriving logical conclusion and making predictions from available knowledge, facts and beleifs.
- Reasoning is a way to infer facts from existing data.
- It is a general process of thinking rationally, to find valid conclusions.

## Monotonic Reasoning ##

- In monotonic reasoning, once the conclusion is taken, then it will remain the same even if we add some other information to existing information in our knowledge.
- Adding knowledge dows not decrease the set of prepositions that can be derived.
- Monotonic reasoning is not useful for the real life systems, as in real time, facts get changed, so we cannot use monotonic reasoning.
- It is used in conventional reasoning systems, and a logic-based system is monotonic.
- Any theorem proving is an example of monotonic reasoning.

**Advantages:**

- each old proof will always remain valid.

**Disadvantages:**

- cannot represent the real world scenarios.
- hypothesis knowledge cannot be expressed with monotonic reasoning.
- new knowledge from the real world cannot be added.

## Non-Monotonic Reasoning ##

- In non-monotonic reasoning, once the conclusion is taken, then it may change if we add some other information to existing information in our knowledge.
- Adding knowledge may decrease the set of prepositions that can be derived.
- Non-monotonic reasoning is useful for the real life systems, as in real time, facts get changed, so we can use non-monotonic reasoning.
- It is used in non-conventional reasoning systems, and a logic-based system is non-monotonic.

## Resolustion in predicate logic ##

- Theorem proving technique that proceeds by building refutation proofs i.e., proofs by contradictions.
- Used, if there are various statements are given, and we need to prove a conclusion of those statements.

**clause:** disjunction of literals

## Steps for Resolution ##

- conversion of facts into first order logic
- convert FOL statemnts into CNF
- convert CNF into clauses
- apply resolution

## Procedural and Declarative Knowledge ##

- We can express the knowledge in various forms to the inference engine in the computer system to solve the problems.
- Thee are two important representations of knowledge procedural and declarative knowledge.
- The basic diffrence between procedural and decelarative knowledge is that procedural knowledge tells us how to do something, whereas declarative knowledge tells us what is true.

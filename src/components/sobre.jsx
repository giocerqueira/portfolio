import React from 'react';
import * as S from './style.jsx';

function Education () {
    return (
        <S.MainSobre>
            <S.SectionDoSobre>
                <h2>Estudos</h2>
                <S.Card>
                    <S.DivCard>
                        <h2>Desenvolvimento front-end</h2>
                        <h3>Junho/2023 - Mai/2024</h3>
                    </S.DivCard>
                </S.Card>
            </S.SectionDoSobre>

            <S.SectionDoSobre>
                <h2>Habilidades</h2>
                <S.Card>
                    <S.DivCard2>
                        <div>
                            <h3>CSS</h3>
                        </div>
                        <div>
                            <h3>JavaScript</h3>
                        </div>
                        <div>
                            <h3>HTML</h3>
                        </div>
                    </S.DivCard2>
                </S.Card>
            </S.SectionDoSobre>

            <S.SectionDoSobre>
                <h2>Profissional</h2>
                <S.Card>
                    <S.DivCard>
                        <h2>Technical Sales Intern | NOKIA</h2>
                    </S.DivCard>
                </S.Card>
            </S.SectionDoSobre>
        </S.MainSobre>
    )
}

export default Education;
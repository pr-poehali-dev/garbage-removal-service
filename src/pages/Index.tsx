import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Recycle" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Clean House</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Тарифы</a>
            <a href="#ecology" className="text-foreground/80 hover:text-primary transition-colors">Экология</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section id="hero" className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-accent text-accent-foreground">
              🌱 Забота о природе начинается с малого
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Мы выносим мусор, вы экономите свое{" "}
              <span className="text-primary">время</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Подписка всего за 499₽ в месяц. Никаких забот с выносом мусора — мы делаем это за вас, заботясь о вашем времени
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowPaymentForm(true)}
              >
                Оформить подписку
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12 т</div>
                <div className="text-sm text-muted-foreground">Мусора переработано</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Идёт на переработку</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/projects/97c6b397-3389-416b-99c4-d68d6700e731/files/7afb02a0-0963-4150-bafb-fa3d6a0fa4f0.jpg"
              alt="Сотрудник Clean House выносит мусор"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Ежедневный вынос</div>
                  <div className="text-sm text-muted-foreground">В удобное время</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20 bg-muted/30 -mx-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary">Тарифы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Простая и честная цена</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Один тариф, который включает всё необходимое для комфортной жизни без мусора
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <Badge className="bg-primary text-primary-foreground mb-2">Популярный выбор</Badge>
              </div>
              <CardTitle className="text-3xl">Ежемесячная подписка</CardTitle>
              <CardDescription className="text-lg mt-2">Всё включено для вашего удобства</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-primary">499₽</span>
                <span className="text-muted-foreground">/месяц</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "Calendar", text: "Ежедневный вынос мусора" },
                  { icon: "Clock", text: "Гибкий график (7:00-22:00)" },
                  { icon: "Leaf", text: "Раздельный сбор отходов" },
                  { icon: "Recycle", text: "Переработка 95% мусора" },
                  { icon: "Bell", text: "SMS-уведомления" },
                  { icon: "HeadphonesIcon", text: "Поддержка 24/7" },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Icon name={feature.icon} className="text-primary" size={20} />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => setShowPaymentForm(true)}
              >
                Оформить подписку за 499₽
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                * Первые 7 дней бесплатно. Отмена в любое время без штрафов.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ecology" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://cdn.poehali.dev/projects/97c6b397-3389-416b-99c4-d68d6700e731/files/c3aa36ff-8344-4203-92c9-dced631736a0.jpg"
              alt="Забота об экологии"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <Badge className="bg-primary/10 text-primary">🌍 Забота об экологии</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Каждый вынос — вклад в будущее планеты
            </h2>
            <p className="text-lg text-muted-foreground">
              Мы не просто выносим мусор — мы заботимся о том, чтобы отходы правильно перерабатывались и не наносили вред природе
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: "Recycle",
                  title: "95% на переработку",
                  desc: "Максимальное количество отходов отправляется на переработку"
                },
                {
                  icon: "Leaf",
                  title: "Раздельный сбор",
                  desc: "Пластик, бумага, стекло — всё сортируется правильно"
                },
                {
                  icon: "TreePine",
                  title: "Компенсация выбросов",
                  desc: "Мы высаживаем деревья, компенсируя углеродный след"
                },
                {
                  icon: "Award",
                  title: "Эко-сертификация",
                  desc: "Сертифицированы международными экологическими стандартами"
                }
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="bg-primary/10 p-3 rounded-lg mt-1">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20 bg-muted/30 -mx-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">О нас</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Миссия Clean House</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl mb-2">Наша цель</h3>
                <p className="text-muted-foreground">
                  Сделать заботу об экологии простой и доступной для каждого жителя города
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-xl mb-2">Наши ценности</h3>
                <p className="text-muted-foreground">
                  Ответственность, забота о природе и качественный сервис для наших клиентов
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/97c6b397-3389-416b-99c4-d68d6700e731/files/91c7cba6-4459-459b-9690-3f3760110e7e.jpg"
              alt="Наша команда"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к эко-движению!</h3>
              <p className="mb-6 opacity-90">
                Более 500 семей уже выбрали нас. Начните заботиться о природе вместе с Clean House
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setShowPaymentForm(true)}
              >
                Оформить подписку сейчас
                <Icon name="Sparkles" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {showPaymentForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Оформление подписки</CardTitle>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowPaymentForm(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <CardDescription>
                Заполните форму для активации подписки за 499₽/месяц
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя и фамилия</label>
                <input 
                  type="text" 
                  placeholder="Иван Петров"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Телефон</label>
                <input 
                  type="tel" 
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  placeholder="ivan@example.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Адрес</label>
                <input 
                  type="text" 
                  placeholder="ул. Ленина, д. 1, кв. 1"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Подписка на месяц</span>
                  <span className="font-semibold">499₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-primary">Первые 7 дней бесплатно</span>
                  <span className="font-semibold text-primary">-499₽</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-semibold">К оплате сегодня</span>
                  <span className="font-bold text-xl text-primary">0₽</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Продолжить к оплате
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с условиями подписки. Оплата спишется через 7 дней.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Recycle" className="text-primary" size={28} />
                <span className="text-xl font-bold">Clean House</span>
              </div>
              <p className="text-sm opacity-80">
                Забота о природе начинается с малого
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div><a href="#hero" className="hover:text-primary transition-colors">Главная</a></div>
                <div><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></div>
                <div><a href="#ecology" className="hover:text-primary transition-colors">Экология</a></div>
                <div><a href="#about" className="hover:text-primary transition-colors">О нас</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@cleanhouse.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm opacity-80">
            <p>© 2024 Clean House. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
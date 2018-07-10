import os

class Config:
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'MtHZcmC874LhSL9cayyE22Nep5VCcCrMcNqeZ7HVAPvEQaS9ZPvuD94d8a7CGMKB'
    SSL_DISABLE = True
    PROPAGATE_EXCEPTIONS = False

    BLOCK_SIZE = 1 #MB
    BLOCK_FREQ = 600 #sec
    VALIDATION_TIME = 0.25 #sec
    PING = 0.00002 #sec / 1km
    BANDWIDTH = 1 #MB/sec
    NODES_QTY = 200
    HASHRATE = (1, 13500000)

    
    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7400']

class TestingConfig(Config):
    TESTING = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7400']

class ProductionConfig(Config):
    SSL_DISABLE = True
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'http://crate:4200'
    ORIGINS=['http://localhost:7400']



config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}

import os,pip,sys,time
try:
 import pyodbc
except:
 package = 'scikit-learn'
 pip.main(['install', '--user', package])
 raise ImportError('Restarting')